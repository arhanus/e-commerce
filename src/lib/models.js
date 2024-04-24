import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
{
    username: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 20,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max:50,
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 20,
    },
    img:{
        type: String,
    },
    
},
{timestamps: true})

export const User = mongoose.models?.User || mongoose.model("User", userSchema)

