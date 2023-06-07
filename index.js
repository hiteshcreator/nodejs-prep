const express = require('express')
const app = express()
const port = 4000
const sendTwilioSms = require('./src/twilio/sendSms')
const twiloroute = require('./src/twilio/routes');


app.get('/', (req, res) => {
  res.send('Node server setup!')
})

// Handling routes request
app.use("/",twiloroute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
