const {Router} =require("express");

const router=Router();

const {create,login}=require("../Controller/SampleController")
router.post('/create',create)
router.post('/login',login)

module.exports=router