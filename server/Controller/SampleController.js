
const sampleModel=require('../Model/SampleModel')
const path=require("path")



exports.create=async(req,res,next)=>
{
    try{
        {
            const {Email,PassWord}=req.body;
            const sampledoc=new sampleModel({Email,PassWord})
            await sampledoc.save()
            return res.status(201).json({message:"Created Sucessfully",data:sampledoc})
        
        }
    }
    catch(err)
    {
        return res.status(404).json({error:"something webt wrong",message:err.message})
    }
}
exports.login=async(req,res,next)=>
{
    try{
        const {Email,PassWord}=req.body;
        sampleModel.findOne({Email:Email}).then(user=>
        {
            if(user)
        {
            if(user.PassWord==PassWord)
            {
                res.json("success")
            }else
            {
                res.json("password is incorrect")
            }
        }
        else{
            res.json("No records")
        }
    }
        )
    }
    catch(err)
    {
       console.log(err)
    }
}