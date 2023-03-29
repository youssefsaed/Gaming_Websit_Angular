import express from 'express'
import { dbConnection } from './databases/connection.js'
import authRouter from './src/modules/auth/auth.routes.js'
import { globalError } from './src/utils/globalError.js'
import cors from 'cors'


const app=express()

//Configuring CORS Policy
app.use(cors())

//buffer
app.use(express.json())

//router
app.use(`/authentication`,authRouter)





dbConnection()

//global error
app.use(globalError)

//server run
const port=3000
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})