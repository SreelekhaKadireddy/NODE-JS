import express from 'express'
let app= express()
app.get("/",(req,resp)=>{
    resp.send("server created...")
})
app.get("/index",(req,resp)=>{
    resp.send("<h1>Index page</h1>")

})
app.listen(8080,'127.0.01',(err)=>{
    if (err) throw err
    console.log(`server running successfully... at:${8080}`)

})