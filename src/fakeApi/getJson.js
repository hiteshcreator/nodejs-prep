const axios = require('axios');

const url = "https://jsonplaceholder.typicode.com/users"

// get user data in Json
const getUserData = async() => {

    try {
        const response = await axios.get(url);
        return response;
    } catch (error) {
        return error;
    }
}

module.exports = getUserData;