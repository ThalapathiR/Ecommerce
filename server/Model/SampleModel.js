const {Schema,model}=require("mongoose")

const sampleMOdel=new Schema(
    {
        Email:{type:String},
        PassWord:{type:String}
    }
)

module.exports=model("Ecommerce",sampleMOdel)