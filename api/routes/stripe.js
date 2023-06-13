const router = require("express").Router();
const KEY = process.env.STRIPE_KEY; // Retrieve Stripe API key from environment variable
const stripe = require("stripe")(KEY);// Create a new instance of Stripe with the API key

// Define the "/payment" route
router.post("/payment", (req, res) => {
   // Use the Stripe API to create a new charge
  stripe.charges.create(
    {
      source: req.body.tokenId, // Stripe token representing the payment source
      amount: req.body.amount,// Amount to charge in the smallest currency unit (e.g., cents)
      currency: "usd",// Currency code (in this case, USD)
    }, (stripeErr, stripeRes) => {
       // Callback function to handle the Stripe API response
      if (stripeErr) {
         // If there's an error during the payment processing
        res.status(500).json(stripeErr);// Respond with a 500 status and the error message
      } else {
          // If the payment is successful
        res.status(200).json(stripeRes);// Respond with a 200 status and the Stripe API response
      }});
});

module.exports = router;
