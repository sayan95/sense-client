// axios global configuration 
import axios from 'axios';

// base axios configuration 
const instance = axios.create({
    baseURL: process.env.apiUrl,
    withCredentials: true
});

// base axios headers
instance.defaults.headers.post['Content-Type'] = 'application/json';

export default instance;