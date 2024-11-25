import React, { useState } from 'react';
import { login, createProduct } from '../../services/api';

const ProductForm = () => {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        status: '',
        stock_quantity: '',
    });

    const [email, setEmail] = useState('manoelamoreno78@gmail.com');
    const [password, setPassword] = useState('6HR223sy');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleLoginAndCreate = async () => {
        setLoading(true);
        try {
            await login(email, password);

            await createProduct(product);
            alert('Produto criado com sucesso!');
        } catch (error) {
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        
        <div className='h-100 w-75 p-5 shadow bg-white rounded' style={{ marginLeft: 24 }}>
            <h1 className='bold fw-800'> Cadastro de Produtos</h1>
            <form>
                <div className='d-flex flex-column mb-4'>
                    <label>Nome</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Nome do Produto"
                        value={product.name}
                        onChange={handleChange}
                    />

                </div>
                <div className='d-flex flex-column mb-4'>
                    <label>Descrição</label>
                    <textarea
                    type="text"
                    name="description"
                    placeholder="Descrição"
                    value={product.description}
                    onChange={handleChange}
                />

                </div>
                <div className='d-flex align-items-center justify-content-between'>
                    <div className='d-flex flex-column'>
                        <label>Preço</label>
                        <input
                            type="number"
                            name="price"
                            placeholder="Preço"
                            value={product.price}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='d-flex flex-column'>
                        <label>Status</label>
                        <select
                        name="status"
                        value={product.status}
                        onChange={handleChange}
                    >
                        <option value="">Selecione o Status</option>
                        <option value="1">Em Estoque</option>
                        <option value="2">Em Reposição</option>
                        <option value="3">Em Falta</option>
                    </select>
                    </div>
                    <div className='d-flex flex-column'>
                        <label>Quantidade em estoque</label>
                        <input
                            type="number"
                            name="stock_quantity"
                            placeholder="Quantidade em Estoque"
                            value={product.stock_quantity}
                            onChange={handleChange}
                        />
                    </div>

                </div>
                
                
                <button
                    type="button"
                    onClick={handleLoginAndCreate}
                    disabled={loading}
                >
                    {loading ? 'Carregando...' : 'Criar Produto'}
                </button>
            </form>

        </div>
    );
};

export default ProductForm;
