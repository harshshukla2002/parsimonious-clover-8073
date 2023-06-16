const express = require("express");
const app=express()
const cors = require("cors")
const {userRouter}=require("./Routes/user.route")
const {connection}=require("./db")

const {feedbackRouter} = require("./Routes/feedback.route")

app.use(express.json())
app.use(cors())
app.use("/users",userRouter)
app.use("/feedback",feedbackRouter)
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
