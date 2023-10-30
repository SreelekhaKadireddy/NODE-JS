//import modules
const express= require('express')
const morgan=require('morgan')
const cors=require('cors')
const mongoose=require('mongoose')
const dotenv = require('dotenv')
const userRouter=require('./routes/userRouter')

//create app/server
let app=express()
//read form data
app.use(express.json())
//read env variables from dotenv package 
dotenv.config({path:'./config/config.env'})

const port=process.env.PORT
const host=process.env.HOST 
const mongo_url=process.env.MONGO_DB_LOCAL-URL
//create middleware http logger
app.use(morgan('tiny'))

app.get("/",(req,resp)=>{
    resp.send("<h1>Home page</h1>")
})
app.use("/user",userRouter)
//connect to database
mongoose.connect(mongo_url).then((response)=>{
    console.log("connected successfully")
}).catch(()=>{})


app.listen(port,host,(err)=>{
    if(err) throw err 
    console.log(`server running on http:${host}:${port} `)
})