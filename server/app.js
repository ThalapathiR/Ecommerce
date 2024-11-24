const sample=require("express")
const app_Server=sample()

app_Server.use('/api',require('./Router/SampleRouter'))
module.exports=app_Server