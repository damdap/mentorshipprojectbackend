import Authmodel from "../models/authSchema.js";
import bcrypt from "bcryptjs"; // Make sure this is imported

const getUserProfile = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await Authmodel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("Get user profile error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateUserProfile = async (req, res) => {
  try {
    const userId = req.params.id;
    const { name, email, password, bio, skills, goal } = req.body;

    const user = await Authmodel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Optional fields update
    user.name = name || user.name;
    user.email = email || user.email;
    user.bio = bio || user.bio;
    user.skills = skills || user.skills;
    user.goal = goal || user.goal;

    // Hash password if provided
    if (password) {
      const salt = 10;
      user.password = await bcrypt.hash(password, salt);
    }

    await user.save();

    res.status(200).json({ message: "Profile updated successfully", user });
  } catch (error) {
    console.error("Update user profile error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export { getUserProfile, updateUserProfile };
