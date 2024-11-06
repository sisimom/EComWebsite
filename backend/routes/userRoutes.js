import express from "express";
const router = express.Router();
// import asyncHandler from "../middleware/asyncHandler.js";
// import Product from "../models/productModel.js";
import {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserByID,
    updateUser
  } from "../controllers/userController.js";
  import { protect,admin } from "../middleware/AuthMiddleware.js";


router.route("/").post(registerUser).get(protect, admin, getUsers);
router.post("/logout",logoutUser);
router.post("/auth",authUser);
router.route("/profile").get(protect, getUserProfile).put(protect, updateUserProfile);
router.route("/:id").get(protect, admin, getUserByID).put(protect, admin, updateUser).delete(protect, admin, deleteUser);

export default router;