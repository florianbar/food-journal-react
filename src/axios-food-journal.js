import axios from 'axios';

const instance = axios.create({
    baseURL: "https://food-journal-react.firebaseio.com/"
});

export default instance;