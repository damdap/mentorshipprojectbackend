import { get } from "mongoose";
import { register, login, logout, getUserProfile, updateUserProfile } from "../controller/Auth.js";
import express from "express";
const AuthRoutes = express.Router();

AuthRoutes.post("/register", register);
AuthRoutes.post("/login", login);
AuthRoutes.post("/logout", logout);
AuthRoutes.get("/getUserProfile/:id", getUserProfile);
AuthRoutes.put("/updateUserProfile/:id", updateUserProfile);


export default AuthRoutes;