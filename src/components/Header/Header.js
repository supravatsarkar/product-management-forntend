import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <nav>
                <Link to="/">Home</Link>
                {/* <Link to="/users">Users</Link>
                <Link to="/users/add">Add User</Link> */}
                <Link to="/products/addproducts">Add Products</Link>
                <Link to="/products/manageproducts">Manage Products</Link>
            </nav>
        </div>
    );
};

export default Header;