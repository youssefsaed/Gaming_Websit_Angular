import mongoose from "mongoose";


export const dbConnection=()=>mongoose.connect(`mongodb://127.0.0.1:27017/auth`)
.then(()=>console.log('database is connection'))
.catch((err)=>console.log({errordb:err}))