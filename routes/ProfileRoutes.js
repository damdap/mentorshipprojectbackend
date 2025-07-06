import express from "express";
import { getUserProfile, updateUserProfile } from "../controller/profile.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const ProfileRoutes = express.Router();
ProfileRoutes.get("/getUserProfile/:id",authMiddleware, getUserProfile);
ProfileRoutes.put("/updateUserProfile/:id",authMiddleware, updateUserProfile);

export default ProfileRoutes;
