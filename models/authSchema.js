import mongoose from "mongoose";
const authSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['admin', 'mentor', 'mentee'],
        default: 'mentee',
        required: true,
    },
}, { timestamps: true, minimize: false });

const Authmodel = mongoose.model.users || mongoose.model('users', authSchema);
export default Authmodel;