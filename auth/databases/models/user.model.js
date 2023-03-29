import mongoose from "mongoose";


const userSchema=new mongoose.Schema({
    first_name:String,
    last_name:String,
    email:String,
    password:String,
    age:Number,
},{timestamps:true})


export const User=mongoose.model('user',userSchema)