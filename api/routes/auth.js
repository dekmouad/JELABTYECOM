const router = require("express").Router();
const {inscrire, connexion} = require("../controllers/auth");

// Define the "/register" route for user registration

router.post("/register", inscrire);
// Define the "/login" route for user login

router.post("/login",connexion );

module.exports = router;
