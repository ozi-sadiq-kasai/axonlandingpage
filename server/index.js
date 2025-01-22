import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import mongoose from 'mongoose'
import router from './Routes/ResearchRoute.js'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    credentials: true,
  }));


  app.use(express.static(path.resolve(__dirname, './client/dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/dist', 'index.html'));
  });
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
