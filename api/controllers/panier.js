const Panier = require("../models/Panier");

// Function to create a new shopping cart

exports.creerPanier = (req, res) => {
      // Creating a new Cart object with the data from the request body

    const panier = new Panier(req.body);
      // Saving the new shopping cart to the database

    panier.save().then(
        panier => res.status(200).json(panier)
    ).catch(err => res.status(500).json(err))
}

// Function to update an existing shopping cart

exports.majPanier = (req, res) => {
      // Finding and updating the shopping cart with the provided userId

    Panier.updateOne({userId:req.params.userId}, {$set: req.body,}, {new: true}
    ).then(panier => res.status(200).json(panier)
    ).catch(err => res.status(500).json(err))
}

// Function to get a specific shopping cart for a user

exports.seulPanier = (req, res) => {
      // Finding a shopping cart with the provided userId

    Panier.findOne({userId: req.params.userId}).then(
        panier => res.status(200).json(panier)
    ).catch(
        err => res.status(500).json(err)
    )
}

