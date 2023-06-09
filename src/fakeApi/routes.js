const express = require('express')

const {getUserData,getPosts} = require('./getjson'); 
const router  = express.Router()

router.get("/user-data",(req,res,next) => {

    const data = getUserData()
                .then((response)=>{
                    res.send(response.data)
                })
                .catch((error) => {
                    console.log("error--", error);
                    res.status(500).send("Internal Server Error");
                });

})

router.get("/posts",(req,res,next) => {

    const data = getPosts()
                .then((response)=>{
                    res.send(response.data)
                })
                .catch((error) => {
                    console.log("error--", error);
                    res.status(500).send("Internal Server Error");
                });

})
  
// Importing the router
module.exports = router