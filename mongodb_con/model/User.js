const mongoose=require('mongoose')
let UserSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please add a name']
    },
    email:{
        type:String,
        unique: true,
        lowercase: true,
        required:true
    },
    loc:{
        type:String,
        required:true
    },
    created:{
        type:Date,
        default: Date.now()
    }
})
let User=mongoose.model('user',UserSchema)
module.exports = User;