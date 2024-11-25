import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/logoBevi.png';

const Menu = () => (
    <div className='w-100 d-flex align-items-center justify-space-between p-5 shadow mb-5 bg-white'>
        <img src={Logo} className='logo'/>
    </div>
);

export default Menu;
