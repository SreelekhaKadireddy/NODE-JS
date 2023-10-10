import fs from 'fs'
import http from 'http'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({path:"config.env"})

let port=process.env.PORT
let host=process.env.HOST_NAME

//create server

let server = http.createServer((req,resp)=>{
    if (req.url == "/index"){
        fs.readFile("views/index.html","utf-8",(err,data)=>{
            if (err) throw err
            resp.end(data)
        })
    }
    if(req.url == "/about"){
        fs.readFile("views/about.html",'utf-8',(err,data)=>{
            if(err) throw err 
            //resp.end("Test Case 123")
            resp.end(data)
        })
    }
    if (req.url == "/service"){
        fs.readFile("views/service.html","utf-8",(err,data)=>{
            if (err) throw err
            resp.end(data)
        })
    }
    if (req.url == "/contact"){
        fs.readFile("views/contact.html","utf-8",(err,data)=>{
            if (err) throw err
            resp.end(data)
        })
    }
    if (req.url == "/product"){
        fs.readFile("views/product.html","utf-8",(err,data)=>{
            if (err) throw err
            resp.end(data)
        })
    }
})

server.listen(port,host,(err)=>{
    if (err) throw err
    console.log(`Server is running on port:${port}`)
})