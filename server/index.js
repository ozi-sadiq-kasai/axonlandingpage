import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import mongoose from 'mongoose'
import router from './Routes/ResearchRoute.js'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173', // Replace with your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    credentials: true, // Allow cookies if needed
  }));


app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.post('/createResearch',router)

try {
    await mongoose.connect(process.env.MONGO_URI)
    app.listen(process.env.PORT,()=>{
        console.log(`server is running on ${process.env.PORT}`)
    })
} catch (error) {
    console.log(error)
    process.exit(1)
}
