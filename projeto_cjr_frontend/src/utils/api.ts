import axios from 'axios';
import { User } from '../types/user';

const api = axios.create({
  baseURL: 'http://localhost:3001', // Alterar para o endereço do backend (ver localhost depois)
});  

const getUsers = async () : Promise<User> => {
    const response = await api.get('/usuarios');
    return response.data;
}
