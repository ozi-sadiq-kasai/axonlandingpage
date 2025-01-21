import express from 'express'
import mongoose from 'mongoose'
const app = express()

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.listen(4000,()=>{
    console.log('server is running')
})