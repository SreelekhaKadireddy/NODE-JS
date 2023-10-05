//read only names
const fs=require('fs')
fs.readFile('data.json','utf-8',(err,data)=>{
    if (err) throw err
    let employees = JSON.parse(data)
    for(employee of employees){
        console.log(employee["name"])
    }
    
})