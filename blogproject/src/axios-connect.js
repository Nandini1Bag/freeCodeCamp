import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://blogsite-73583.firebaseio.com/'
});

export default instance;