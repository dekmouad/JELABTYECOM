const router = require("express").Router();
const {inscrire, connexion} = require("../controllers/auth");


router.post("/register", inscrire);
router.post("/login",connexion );

module.exports = router;
