const mongoose = require("mongoose");
// Define the schema for the Cart model
const PanierSchema = new mongoose.Schema(
    {
        userId: {type: String, required: true},// Field for the user ID associated with the cart, required
        products: [
            {
                _id: {
                    type: String, // Field for the product ID
                },
                img: {
                    type: String, // Field for the product image
                },
                title: {
                    type: String,// Field for the product title
                },
                quantite: {
                    type: Number,
                    default: 1, // Field for the quantity of the product, with a default value of 1
                },
                color: {
                    type: String, // Field for the product color
                },
                size: {
                    type: String,// Field for the product size
                },
                price: {
                    type: Number,// Field for the product price
                },
            },
        ],
        Total: {type: Number, default: 0},// Field for the total cart amount, with a default value of 0
        panierQuantity: {type: Number, default: 0},// Field for the total quantity of products in the cart, with a default value of 0
    },
    {timestamps: true} // Option to automatically add createdAt and updatedAt timestamps
);
// Create and export the Cart model based on the schema

module.exports = mongoose.model("Panier", PanierSchema);
