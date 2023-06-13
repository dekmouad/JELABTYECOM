const User = require("../models/User");
const CryptoJS = require("crypto-js");
// Function to update a user

exports.updateUser = (req, res) => {
        // Check if password is provided in the request body

    if (req.body.password) 
     // Encrypt the password using AES encryption before updating
    {req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString();}

               // Finding and updating the user with the provided id

    User.findByIdAndUpdate(req.params.id, {$set: req.body,}, {new: true}
    ).then(
        updatedUser => res.status(200).json(updatedUser)
    ).catch(
        err => res.status(500).json(err)
    )
}
// Function to delete a user
exports.deleteUser = (req, res) => {
        // Finding and deleting the user with the provided id

    User.findByIdAndDelete(req.params.id).catch(
        res.status(200).json("User has been deleted...")
    ).catch(
        err => res.status(500).json(err)
    )
}
// Function to get a specific user by id

exports.getUser = (req, res) => {
        // Finding a user with the provided id

    User.findById(req.params.id).then(
        user => {
                        // Removing the password field from the user object before sending the response

            const {password, ...others} = user._doc;
            res.status(200).json(others);
        }
    ).catch(
        err => res.status(500).json(err)
    )
}
// Function to get all users

exports.getAllUsers = (req, res) => {
        // Handling query parameter for fetching new users

    const query = req.query.new;
    const users = query ? User.find().sort({_id: -1}).limit(5) : User.find();
    users.then(
        users => res.status(200).json(users)
    ).catch(
        err => res.status(500).json(err)
    )
}
// Function to get user statistics

exports.getUserStats = (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
        // Aggregating user data based on creation month

    User.aggregate([
        {$match: {createdAt: {$gte: lastYear}}},
        {
            $project: {
                month: {$month: "$createdAt"},
            },
        },
        {
            $group: {
                _id: "$month",
                total: {$sum: 1},
            },
        },
    ]).then(
        data => res.status(200).json(data)
    ).catch(
        err => res.status(500).json(err)
    )
}