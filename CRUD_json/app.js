const express=require('express')
const fs=require ('fs')
const morgan=require('morgan')
 
//create express app
const app=express()
const port=8080
const host='127.0.0.1'

//read data from form/postman tool
app.use(express.json())

//API URL: 127.0.0.1:8080/
app.get("/",(req,resp)=>{
    resp.send({"msg":"ROOT REQUEST"})
})
//Read data API URL: 127.0.0.1:8080/all
app.get("/all",(req,resp)=>{
    const empData=getEmpData()
    resp.send(empData)
})
//create data API URL:127.0.0.1:8080/emp/add
app.post("/emp/add",(req,resp)=>{
    let empData=req.body
    console.log(empData)
    let employees=getEmpData()
    console.log(employees)
    let empExist=employees.find((emp)=>{emp.ename==empData.ename})
    if (empExist){
        return resp.send({"msg":"Employee already exists!"})
    }
    employees.push(empData)
    saveEmpData(employees)
    resp.send({"msg":"employee inserted successfully"})
})

//delete data API URL:127.0.0.1:8080/emp/delete/:ename
app.delete("/emp/delete/:ename",(req,resp)=>{
    //to read url data
    let ename=req.params.ename
    //create new emp data
    let employees=getEmpData()
    let new_Employees=employees.filter(emp=>emp.ename != ename)
    saveEmpData(new_Employees)
    resp.send({"msg":"emp data deleted successfully..."})
})



let saveEmpData=(employees)=>{
    fs.writeFileSync('emp.json',JSON.stringify(employees))
}

let getEmpData=()=>{
    //read json file
    let empData=fs.readFileSync('emp.json','utf-8')
    return JSON.parse(empData)
}
//create server
app.listen(port,host,(err)=>{
    if(err) throw err
    console.log(`server running on http://${host}:${port}`)
})