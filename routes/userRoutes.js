const express = require("express");
const {
  getAllUsers,
  registerController,
  loginController,
} = require("../controllers/userController");

// router object
const router = express.Router();
// get all users||get
router.get("/all-users", getAllUsers);

// create user||post
router.post("/register", registerController);

// login ||post
router.post("/login", loginController);

module.exports = router;
