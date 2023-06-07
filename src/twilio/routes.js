const express = require("express")
const router  = express.Router()
const sendTwilioSms = require('./sendSms');

router.get("/send-sms",(req,res,next) => {

    sendTwilioSms((error, response) => {
        if(response){
            console.log(response.body);
            res.send({
                message: response.body,
                status:201
            })
        }
    })

})
  
// Importing the router
module.exports=router