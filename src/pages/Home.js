import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => (
    <div>
        <h1>Gestão de Produtos</h1>
        <Link to="/create-product">Criar Produto</Link>
    </div>
);

export default Home;
