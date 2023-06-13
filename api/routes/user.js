const User = require("../models/User");
const {verifyTokenAndAuthorization, verifyTokenAndAdmin} = require("../middlewares/verifyToken");
const {updateUser, deleteUser, getUser, getAllUsers, getUserStats} = require("../controllers/user");
const {getAllOrders} = require("../controllers/order");

const router = require("express").Router();

router.put("/:id", verifyTokenAndAuthorization, updateUser);
// Endpoint to update a user's information. Requires token verification and authorization.

router.delete("/:id", verifyTokenAndAuthorization, deleteUser);
// Endpoint to delete a user. Requires token verification and authorization.

router.get("/find/:id", verifyTokenAndAdmin, getUser);
// Endpoint to get a user by ID. Requires token verification and admin access.

router.get("/", verifyTokenAndAdmin, getAllUsers);
// Endpoint to get all users. Requires token verification and admin access.

router.get("/stats", verifyTokenAndAdmin,getUserStats); 
// Endpoint to get user statistics. Requires token verification and admin access.

module.exports = router;
