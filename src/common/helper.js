const sendResponse = (res,data,status=201) =>{

   return res.send({
                message: data,
                status:status
          })
}

module.exports = {
    sendResponse
};