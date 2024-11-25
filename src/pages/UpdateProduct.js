import React, { useState } from 'react';
import { updateProductService } from '../services/productService';

const UpdateProduct = () => {
    const [form, setForm] = useState({
        id: '',
        name: '',
        description: '',
        price: '',
        status: '',
        stock_quantity: '',
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await updateProductService(form);
            setMessage(response.message || 'Produto atualizado com sucesso!');
        } catch (error) {
            setMessage('Erro ao atualizar o produto.');
        }
    };

    return (
        <div>
            <h1>Atualizar Produto</h1>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="id"
                    placeholder="ID do Produto"
                    value={form.id}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="name"
                    placeholder="Nome"
                    value={form.name}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="description"
                    placeholder="Descrição"
                    value={form.description}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Preço"
                    value={form.price}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="status"
                    placeholder="Status"
                    value={form.status}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="stock_quantity"
                    placeholder="Quantidade em Estoque"
                    value={form.stock_quantity}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Atualizar</button>
            </form>
        </div>
    );
};

export default UpdateProduct;
