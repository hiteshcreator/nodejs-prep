const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken  = process.env.TWILIO_AUTH_TOKEN;
const fromNumber = process.env.TWILIO_FROM;
const recNumber  = process.env.TWILIO_TO;

const client = require('twilio')(accountSid, authToken);

// send message with twilio
const sendTwilioSms = (callback) =>{

    client.messages.create({
        body: 'Hi there',
        from:fromNumber,
        to:recNumber
    })
    .then(message =>{
        callback(null,message);
    })
    .catch(error => {
        callback(error);
    });
}

module.exports = sendTwilioSms;