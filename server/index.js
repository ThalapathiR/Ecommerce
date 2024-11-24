const express=require("express")
const HTTP_Server=express()
const cors=require("cors");
require('./Database/dbConfig')
const PORT=process.env.PORT || 3000

HTTP_Server.use(express.json())
HTTP_Server.use(express.urlencoded({extended:false}))
HTTP_Server.use(cors());

HTTP_Server.listen(PORT,()=>
{
    console.log(`listening at port ${PORT}`)
})
HTTP_Server.use("/",require('./app'))

HTTP_Server.get('/',(req,res)=>
{
    res.send("server is running")
}
)