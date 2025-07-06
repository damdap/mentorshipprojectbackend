import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectDB from "./config/Mongodb.js";
import AuthRoutes from "./routes/AuthRoutes.js";
import ProfileRoutes from "./routes/ProfileRoutes.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", AuthRoutes);
app.use("/api/profile", ProfileRoutes);

app.get("/", (req, res) => {
    res.json({ message: "Welcome to the Mentorship API" })
});

connectDB();

app.listen(8000, () => {
    console.log("Server is running");
});