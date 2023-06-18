const mongoose = require("mongoose");

mongoose.connect(process.env.NEW_DB,{
    useNewUrlParser: true,
})

mongoose.connection.on("error",err =>{
    console.log("error--",err)
})

mongoose.connection.on("connected",(err,res) =>{
    console.log("connection is connected")
})