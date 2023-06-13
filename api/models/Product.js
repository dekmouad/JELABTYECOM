const mongoose = require("mongoose");
// Define the schema for the "Product" model
const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },// Field for the product title, required and unique
    desc: { type: String, required: true },// Field for the product description, required
    img: { type: String, required: true },// Field for the product image URL, required
    categories: { type: Array , required: true},// Field for the product categories, an array required
    size: { type: Array , required: true}, // Field for the product sizes, an array required
    color: { type: Array , required: true},// Field for the product colors, an array required
    type: { type: Array , required: true},// Field for the product types, an array required
    price: { type: Number, required: true },// Field for the product price, required
    inStock: { type: Boolean, default: true },// Field indicating whether the product is in stock, defaulting to true
    style: { type: String, required: true },// Field for the product style, required

  },
  { timestamps: true }// Option to automatically add createdAt and updatedAt timestamps
);
// Create and export the "Product" model based on the schema

module.exports = mongoose.model("Product", ProductSchema);