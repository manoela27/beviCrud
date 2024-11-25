import React, { useState } from 'react';
import { deleteProductService } from '../services/productService';

const DeleteProduct = () => {
    const [id, setId] = useState('');
    const [message, setMessage] = useState('');

    const handleDelete = async () => {
        try {
            const response = await deleteProductService(id);
            setMessage(response.message || 'Produto deletado com sucesso!');
        } catch (error) {
            setMessage('Erro ao deletar o produto.');
        }
    };

    return (
        <div>
            <h1>Deletar Produto</h1>
            {message && <p>{message}</p>}
            <input
                type="text"
                placeholder="ID do Produto"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            <button onClick={handleDelete}>Deletar</button>
        </div>
    );
};

export default DeleteProduct;
