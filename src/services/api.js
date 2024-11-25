// api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://34.71.240.100/api', // URL base da API
});

// Interceptor para adicionar o token de autenticação em todas as requisições
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Função para login
export const login = async (email, password) => {
    try {
        const response = await api.post('/auth/login', { email, password });
        const { token } = response.data;
        localStorage.setItem('authToken', token); // Armazena o token localmente
        console.log('Login realizado com sucesso!');
        return token;
    } catch (error) {
        console.error('Erro ao fazer login:', error.response?.data || error.message);
        throw new Error('Não foi possível autenticar.');
    }
};

// Função para criar um produto
export const createProduct = async (productData) => {
    try {
        const response = await api.post('/product/create', productData);
        console.log('Produto criado com sucesso:', response.data);
        return response.data;
    } catch (error) {
        console.error('Erro ao criar produto:', error.response?.data || error.message);
        throw new Error('Não foi possível criar o produto.');
    }
};

// Função para atualizar um produto
export const updateProduct = async (productData) => {
    const response = await api.put('/product/update', productData);
    return response.data;
};

// Função para excluir um produto
export const deleteProduct = async (id) => {
    const response = await api.delete('/product/delete', { data: { id } });
    return response.data;
};

// Função para obter todos os produtos
export const getAllProducts = async () => {
    try {
        const response = await api.get('/product/list'); // Supondo que este seja o endpoint para listar produtos
        return response.data;
    } catch (error) {
        console.error('Erro ao obter lista de produtos:', error.response?.data || error.message);
        throw new Error('Não foi possível obter a lista de produtos.');
    }
};
