//import required modules
const http = require('http')
const fs = require('fs')
const path =require('path')
const { request } = require('https')
const { CLIENT_RENEG_LIMIT } = require('tls')

//create server
let server = http.createServer((Request,Response)=>{
    if(req.url ==="/index"){
        fs.readFile(path.join(__dirname,'views','index.html'),'utf-8',(err,data)=>{
            if(err) throw err
            resp.end(data)
        })
    }
    if(req.url === '/about'){
    fs.readFile(path.join(__dirname,'views','about.html'),'utf-8',(err,data)=>{
            if(err) throw err
            resp.end(data)
        })
    }
    else{
            fs.readFile(path.join(__dirname,'views','contact.html'),'utf-8',(err,data)=>{
            if(err) throw err
            resp.end(data)
        })
    }

})
server.listen(8080,'127.0.0.1',(err)=>{
    if (err) throw err
    console.log("server is running.....")
})