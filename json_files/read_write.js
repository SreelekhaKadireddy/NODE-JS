//read data from json file and write into new file
const fs=require('fs')
fs.readFile('data.json','utf-8',(err,data)=>{
    if (err) throw err
    fs.writeFile('user.json',JSON.stringify(data),(err)=>{
        if (err) throw err
        console.log("success")
    })
    
})