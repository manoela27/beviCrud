import React, { useEffect, useState } from 'react';
import { getAllProductsService } from '../services/productService';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getAllProductsService();
                setProducts(data.data); 
            } catch (err) {
                setError('Erro ao buscar produtos.');
            }
        };
        fetchProducts();
    }, []);

    if (error) return <p>{error}</p>;
    if (products.length === 0) return <p>Carregando...</p>;

    return (
        <div>
            <h1>Lista de Produtos</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <p><strong>Nome:</strong> {product.name}</p>
                        <p><strong>Preço:</strong> {product.price}</p>
                        <p><strong>Status:</strong> {product.status}</p>
                        <hr />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
