import dotenv from "dotenv";

dotenv.config()

const config = {
    PORT: process.env.PORT || 5000,
    MONGODB_URL: process.env.MONGODB_URL || "mongodb+srv://ajaythopate999:<ajaythopate999>@cluster0.cp6ubqv.mongodb.net/?retryWrites=true&w=majority",
    JWT_SECRET: process.env.JWT_SECRET || "youresecret",
    JWT_EXPIRY: process.env.JWT_EXPIRY ||"30d"
    

}

export default config