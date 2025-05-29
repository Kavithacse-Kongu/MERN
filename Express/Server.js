const express = require('express')
const app =express()
const router =require('./Router/egRouter')
const dotenv=require('dotenv')
dotenv.config()
const PORT=process.env.PORT
app.use(express.json())
app.use(router)
//app.get('/',(req,res)=>{
  //  res.json({
   //     message:"Get request work"
   // })
//})
app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})