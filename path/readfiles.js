const fs=require('fs')
const path= require('path')
file_name=path.join(__dirname,"emp","personal details","details.json")
fs.readFile(file_name,'utf-8',(err,data)=>{
    if (err) throw err
    console.log(data)
})