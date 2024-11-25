import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importação correta
import Home from './pages/Home';
import CreateProduct from './pages/CreateProduct';
import ProductDetails from './pages/ProductDetails';
import UpdateProduct from './pages/UpdateProduct';
import DeleteProduct from './pages/DeleteProduct';

function App() {
    return (
        <Router> 
            <Routes> 
                <Route path="/" element={<Home />} />
                <Route path="/create-product" element={<CreateProduct />} />
                <Route path="/product" element={<ProductDetails />} />
                <Route path="/update-product" element={<UpdateProduct />} />
                <Route path="/delete-product" element={<DeleteProduct />} />
            </Routes>
        </Router>
    );
}

export default App;
