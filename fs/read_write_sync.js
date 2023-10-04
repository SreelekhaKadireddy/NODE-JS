const fs=require('fs')
let data=fs.readFileSync('data.txt','utf-8')
fs.writeFileSync('data_copy1.txt',data)