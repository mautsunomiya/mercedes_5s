import axios from 'react-native-axios';

const api = axios.create({
    baseURL: 'http://192.168.15.14:4000/historico/5s/createdAt/DESC'
});

export default api;