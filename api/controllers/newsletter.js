const Mail = require("../models/NewsLetter");

// Function to add a new email to the mailing list

exports.addMail = (req, res) => {
      // Creating a new Mail object with the data from the request body

    const newMail = new Mail(req.body);
  // Saving the new email to the database

    newMail.save().then(
        savedMail => res.status(200).json(savedMail)
    ).catch(
        err => res.status(500).json(err)
    )
}
// Function to get all emails from the mailing list

exports.getAllMail = (req, res,next) => {
  // Finding all emails in the Mail collection

    Mail.find().then(mails =>{ 
              // Storing the retrieved emails in the request object for future use

        req.mails = mails;
        next();
    })
        .catch(err => res.status(500).json(err))
    
}