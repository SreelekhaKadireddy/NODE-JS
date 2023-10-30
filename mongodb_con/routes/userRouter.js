const express=require('express')
const router=express.Router()
const User=require('../model/User')

router.get("/",(req,resp)=>{
    resp.send("<h1>User page</h1>")
})

router.get("/all",async(req,resp)=>{
    try{
        let users=await User.find()
        resp.status(200).json(users)
    }
    catch(err){
        resp.status(500).json({"msg":"ERROR"})
    }
})
//insert new user
router.post('/add', async (req, res) => {
    console.log("Adding a user");
    try{
        let name=req.body.name;
        let email=req.body.email;
        let loc=req.body.loc;
        let new_user=new User({name:name,email:email,loc:loc})
        console.log(new_user)
        await new_user.save();
        res.status(200).json({message:"Successfully added the user!",user:new_user});
    }
    catch(err){
        console.log(err)
    }
    });
    module.exports=router