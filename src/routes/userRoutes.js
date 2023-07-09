const express = require("express")
const router  = express.Router()
const userModel = require("../models/userModel");
const {sendResponse} = require('../common/helper');

router.post('/add-user', async function(req, res,next) {
    console.log("req",userModel)
    const { email, name } = req.body
    console.log("req",name, email)  
       
    try {
        let user =  await userModel.create({
            name:name,
            email:email
        });
        sendResponse(res,user);
        // Users.findOne({ email }).populate('detail');

    } catch (err) {
        res.status(422).send(err);
        console.log(err);
    }
});

module.exports=router