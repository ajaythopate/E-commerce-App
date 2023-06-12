import dotenv from "dotenv";

dotenv.config()

const config = {
    PORT: process.env.PORT || 5000,
    MONGODB_URL: process.env.MONGODB_URL || "mongodb+srv://ajaythopate999:<ajaythopate999>@cluster0.cp6ubqv.mongodb.net/?retryWrites=true&w=majority"
}

export default config