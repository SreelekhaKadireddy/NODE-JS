const http=require('http')
let server=http.createServer((request,response)=>{
    response.end("server created successfully...")
})
server.listen(8000,"127.0.0.1",(err)=>{
    if(err) throw err
    console.log("success")
})