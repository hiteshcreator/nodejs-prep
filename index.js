const express  = require('express')
const app      = express()
const mongoose = require("mongoose");
const path     = require('path')
require('dotenv').config({ path: path.resolve(__dirname, './.env') })

const twiloroute = require('./src/twilio/routes');
const fakeapi    = require('./src/fakeApi/routes');

const port     = process.env.PORT
const furious  = process.env.DATABASE
const mongoDb  = `mongodb+srv://thehiteshcreator:${process.env.MONGOPASS}@cluster0.lwagjox.mongodb.net/${furious}?retryWrites=true&w=majority`

// mongoose.connect(mongoDb,(err) => {
//   if (err) console.log(`unable to connect mongodb:${err}`);
//   else
//     console.log("mongoDb is connected")
//   // {
//   //   useNewUrlParser: true,
//   //   useFindAndModify: false,
//   //   useUnifiedTopology: true
//   // }
//   //mongodb+srv://thehiteshcreator:<password>@cluster0.lwagjox.mongodb.net/?retryWrites=true&w=majority
// });

mongoose
    .connect('mongodb://127.0.0.1:27017/test')
    .catch (error => console.log(error));


app.get('/', (req, res) => {
  res.send('Node server setup! <h2>Hit the twilio SMS API with this link <a href="http://localhost:4000/send-sms">Sms Send</a></h2><h2>Fake data for users <a href="http://localhost:4000/user-data">User Data</a></h2><h2>Fake data for users post <a href="http://localhost:4000/posts">User Post</a></h2>')
})

// app.use(bodyParser.urlencoded({
//   extended: true
// }));

// Handling routes request
app.use("/",twiloroute);
app.use("/",fakeapi);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})