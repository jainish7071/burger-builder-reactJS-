import axios from 'axios';

const instance = axios.create({
    baseURL : "https://react-my-burger-builder-f5ffd-default-rtdb.firebaseio.com/"
})
export default instance;