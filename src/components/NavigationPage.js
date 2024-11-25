import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavigationPage = () => {
    const location = useLocation(); 

    return (
        <div className='h-100 w-25 p-5 shadow mb-5 bg-white rounded mr-4'>
            <Link 
                to="/product" 
                className={`link-page ${location.pathname === '/product' ? 'bold' : ''}`}
            >
                Produtos Cadastrados
            </Link>
            <br />
            <Link 
                to="/create-product" 
                className={`link-page ${location.pathname === '/create-product' ? 'bold' : ''}`}
            >
                Cadastro de Produtos
            </Link>
        </div>
    );
};

export default NavigationPage;
