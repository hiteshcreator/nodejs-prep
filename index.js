const express = require('express')
const app = express()
const port = 4000
const twiloroute = require('./src/twilio/routes');
const fakeapi = require('./src/fakeApi/routes');


app.get('/', (req, res) => {
  res.send('Node server setup! <h2>Hit the twilio SMS API with this link <a href="http://localhost:4000/send-sms">Sms Send</a></h2>')
})

// Handling routes request
app.use("/",twiloroute);
app.use("/",fakeapi);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})