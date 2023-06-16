const mongoose=require("mongoose")

const UserSchema=mongoose.Schema({
    name:String,
    email:String,
    gender:String,
    pass:String,
    age:Number,
    
   
},{
    versionKey:false
})

const UserModel=mongoose.model("User",UserSchema)

module.exports={
    UserModel
}