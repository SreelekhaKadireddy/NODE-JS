//read all the data
const fs=require('fs')
fs.readFile('data.json','utf-8',(err,data)=>{
    if (err) throw err
    console.log(data)
})