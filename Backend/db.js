const mongoose = require("mongoose");

const connection=mongoose.connect("mongodb+srv://harshshukla:harsh12@cluster0.ob6lhlw.mongodb.net/Pomodoro?retryWrites=true&w=majority")

module.exports={
    connection
}