import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
     try {

        mongoose.connection.on("error", (error)=> {
            console.error("MongoDB connection error:", error);
        })

        const url = `${process.env.MONGODB_URL}/MentorProject`;
        await mongoose.connect(url);
        console.log("Database connected successfully");
        } catch (error) {
        console.log(error);
        console.error("Database connection failed:", error.message);
    }
}

export default connectDB;