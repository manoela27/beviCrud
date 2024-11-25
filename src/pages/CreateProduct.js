import React from 'react';
import ProductForm from '../components/ProductForm/ProductForm';
import Menu from '../components/MenuMain';
import NavigationPage from '../components/NavigationPage';

const CreateProduct = () => {
    return (
        <div className='h-100'> 
            <Menu></Menu>
            <div className='container'>
                <div className='d-flex align-items center justify-content-center h-100'>
                    <NavigationPage/>
                    <ProductForm />
                </div>

            </div>
        </div>
    );
};

export default CreateProduct;
