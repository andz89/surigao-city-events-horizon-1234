import express from "express";
import {
  authUser,
  registerUser,
  logoutUser,
  // getUserProfile,
  updateUserProfile,
  updateUserPassword,
} from "../controllers/organizerController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);

router
  .route("/profile")
  // .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router
  .route("/updatePassword")

  .put(protect, updateUserPassword);
export default router;
