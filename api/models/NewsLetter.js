const mongoose = require("mongoose");
// Define the schema for the "Mail" model

const MailSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },  // Field for the email address, required and unique
  },
  { timestamps: true }// Option to automatically add createdAt and updatedAt timestamps
);
// Create and export the "Mail" model based on the schema

module.exports = mongoose.model("Mail", MailSchema);