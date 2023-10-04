const fs=require('fs')
let data=fs.readFile('data.txt','utf-8',(err,data)=>{
    if(err) throw err
    fs.writeFile('data_copy2.txt',data,(err)=>{
        if(err) throw err
        console.log("sucess")
    })
})
