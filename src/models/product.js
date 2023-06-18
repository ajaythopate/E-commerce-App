import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required:["true","please provide a product name"],
        trim: true,
        maxLength: [120, "product name should nit be max than 120 chars"]
        
},
description:{
    type:String
},
    photos:[
        {
            secure_url:{
                type:String,
                required:true
            }
        }
    ]

},{timestamps:true})






export default mongoose.model("product" , productSchema)