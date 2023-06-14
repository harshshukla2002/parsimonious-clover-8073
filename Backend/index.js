const express = require("express");
const app=express()
const {userRouter}=require("./Routes/user.route")
const {connection}=require("./db")
app.use(express.json())

app.use("/users",userRouter)

app.listen(4500,async()=>{
    try{
        await connection
        console.log("connected to db")
        console.log("listening on port 4500")
    }catch(err){
      console.log(err)
      console.log("server failed")
    }
})
