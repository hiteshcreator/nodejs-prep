const axios = require('axios');

const url = "https://jsonplaceholder.typicode.com/"

// get user data in Json
const getUserData = async() => {
    try {
        const response = await axios.get(url+"users");
        return response;
    } catch (error) {
        return error;
    }
}

// get user data in Json
const getPosts = async() => {
    try {
        const response = await axios.get(url+"posts");
        return response;
    } catch (error) {
        return error;
    }
}

module.exports = {getUserData,getPosts};