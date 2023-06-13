const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// Function for user registration

exports.inscrire = (req, res) => {
    // Creating a new user object with the provided data

  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    name: req.body.name,
    lastname: req.body.lastname,
    password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASS_SEC
    ).toString(),
  });
    // Saving the new user to the database

  newUser.save().then((savedUser) => {
          // Generating an access token using JWT for the saved user

    const accessToken = jwt.sign(
        {
          id: savedUser._id,
          isAdmin: savedUser.isAdmin,
        },
        process.env.JWT_SEC,
        { expiresIn: "3d" }
    );
          // Returning the saved user and the access token in the response

    res.status(201).json({...savedUser._doc,accessToken});
  })
      .catch((err) => res.status(500).json(err));
};
// Function for user login

exports.connexion = (req, res) => {
    // Finding a user with the provided email

  User.findOne({ email: req.body.email })
          // If no user is found, return an error message

    .then ((user) => {
      if (!user) {
        res.status(401).json("Wrong credentials!");
      } else {
                // Decrypting the stored password and comparing it with the provided password

        const hashedPassword = CryptoJS.AES.decrypt(
          user.password,
          process.env.PASS_SEC
        );
        const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
        if (OriginalPassword !== req.body.password) {
                    // If passwords don't match, return an error message

          res.status(401).json("Wrong credentials!");
        } else {
                    // Generating an access token using JWT for the authenticated user

          const accessToken = jwt.sign(
            {
              id: user._id,
              isAdmin: user.isAdmin,
            },
            process.env.JWT_SEC,
            { expiresIn: "3d" }
          );
                    // Returning the user data (excluding the password) and the access token in the response

          const { password, ...others } = user._doc;
          res.status(200).json({ ...others, accessToken });
        }
      }
    })
    .catch((err) => res.status(500).json(err));
};
