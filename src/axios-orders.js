import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://reactdatabase-e69aa-default-rtdb.firebaseio.com/'
});

export default instance;