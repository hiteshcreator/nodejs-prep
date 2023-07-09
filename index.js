const express  = require('express')
const app      = express()
const path     = require('path')
var bodyParser = require('body-parser')
const fileupload = require('express-fileupload');
require('dotenv').config({ path: path.resolve(__dirname, './.env') })

require('./src/db/conn');
app.use(fileupload());
app.use(express.urlencoded({extended:false}))
app.use(express.json())
// app.use(express.bodyParser());
const twiloroute = require('./src/twilio/routes');
const fakeapi    = require('./src/fakeApi/routes');
// const usersRoute  = require('./src/routes/userRoutes');

const port     = process.env.PORT

app.get('/', (req, res) => {
  res.send('Node server setup! <h2>Hit the twilio SMS API with this link <a href="http://localhost:4000/send-sms">Sms Send</a></h2><h2>Fake data for users <a href="http://localhost:4000/user-data">User Data</a></h2><h2>Fake data for users post <a href="http://localhost:4000/posts">User Post</a></h2>')
})


// Handling routes request
app.use("/",twiloroute);
app.use("/",fakeapi);
app.use("/",require('./src/routes/userRoutes'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})