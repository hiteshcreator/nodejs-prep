const express  = require('express')
const app      = express()
const mongoose = require("mongoose");
const path     = require('path')
require('dotenv').config({ path: path.resolve(__dirname, './.env') })

const twiloroute = require('./src/twilio/routes');
const fakeapi    = require('./src/fakeApi/routes');

const port     = process.env.PORT

mongoose.connect(process.env.NEW_DB,{
  useNewUrlParser: true,
})

mongoose.connection.on("error",err =>{
  console.log("error--",err)
})

mongoose.connection.on("connected",(err,res) =>{
  console.log("connection is connected")
})


app.get('/', (req, res) => {
  res.send('Node server setup! <h2>Hit the twilio SMS API with this link <a href="http://localhost:4000/send-sms">Sms Send</a></h2><h2>Fake data for users <a href="http://localhost:4000/user-data">User Data</a></h2><h2>Fake data for users post <a href="http://localhost:4000/posts">User Post</a></h2>')
})


// Handling routes request
app.use("/",twiloroute);
app.use("/",fakeapi);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})