const express = require("express");
const { protect, admin } = require("../middleware/authMiddleware.js");
const {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserByID,
  deleteUser,
  updateUser,
} = require("../controllers/userController.js");

const router = express.Router();

router.post("/login", authUser);

router.post("/", registerUser);

router.post("/logout", logoutUser);

router.use(protect);

router.get("/profile", getUserProfile);

router.put("/profile", updateUserProfile);

router.use(admin);

router.get("/", getUsers);

router.get("/:id", getUserByID);

router.delete("/:id", deleteUser);

router.put("/:id", updateUser);

module.exports = router;
