const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require("../middlewares/verifyToken");
const { creerPanier,majPanier,seulPanier} = require("../controllers/panier");

const router = require("express").Router();

// Define the "/panier" routes

router.post("/", creerPanier);// Create a new Cart
router.put("/:userId", majPanier);//Update a Cart
router.get("/find/:userId", seulPanier); // Get a specific Cart


module.exports = router;
