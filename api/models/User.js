const mongoose = require("mongoose");
// Define the schema for the "User" model

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },// Field for the username, required and unique
    email: { type: String, required: true, unique: true },// Field for the email, required and unique
    password: { type: String, required: true },// Field for the password, required
    name: { type: String, required: true },// Field for the user's first name, required
    lastname: { type: String, required: true },// Field for the user's last name, required
    isAdmin: {// Field indicating whether the user is an admin, defaulting to false
      type: Boolean,
      default: false,
    },
    img: { type: String },// Field for the user's image URL
  },
  { timestamps: true }// Option to automatically add createdAt and updatedAt timestamps
);
// Create and export the "User" model based on the schema
module.exports = mongoose.model("User", UserSchema);
