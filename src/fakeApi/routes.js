const express = require('express')
const {getUserData,getPosts} = require('./getjson'); 
const router  = express.Router()
const {sendResponse} = require('../common/helper');

router.get("/user-data",(req,res,next) => {

    const data = getUserData()
                .then((response)=>{
                    sendResponse(res,response.data)
                })
                .catch((error) => {
                    sendResponse(res,"Internal Server Error",500)
                    // console.log("error--", error);
                    // res.status(500).send("Internal Server Error");
                });

})

router.get("/posts",(req,res,next) => {

    const data = getPosts()
                .then((response)=>{
                    sendResponse(res,response.data)
                })
                .catch((error) => {
                    console.log("error--", error);
                    sendResponse(res,"Internal Server Error",500)
                    // res.status(500).send("Internal Server Error");
                });

})
  
// Importing the router
module.exports = router