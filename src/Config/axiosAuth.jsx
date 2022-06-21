import axios from 'axios';


const clienteAxiosAuth= axios.create({
    baseURL:'http://192.168.1.131:5100'
});

export default clienteAxiosAuth;
