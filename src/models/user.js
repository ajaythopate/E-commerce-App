import mongoose from "mongoose";
import AuthRoles from "../utils/authRoles";
import bcrypt from "bcryptjs"

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: ["true", "Name is required"],
        maxLength: [50, "Name muist be less than 50 chars"]

    },
    email: {
        type: String,
        required: ["true", "Email is required"],

    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minLenght: [8, "password must be at least 8 chars"],
        select: false
    },
    role: {
        type: String,
        enum: Object.values(AuthRoles),
        default: AuthRoles.USER
    },
    forgotPasswordToken: String,
    forgotPasswordExpiry: Date
},
    { timestamps: true }
)


//Encrypt the password before saving :HOOKS

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next()
    bcrypt.hash(this.password, 10)
    next()
})

userSchema.methode = {
    //compare password
    comparePassword: async function (enterPassword) {
        return await bcrypt.compare(enterPassword, this.password)
    }
}

export default mongoose.model("User", userSchema)