import axios from 'axios';


const clienteAxiosSocket= axios.create({
    baseURL:'http://192.168.1.131:5200'
});

export default clienteAxiosSocket;