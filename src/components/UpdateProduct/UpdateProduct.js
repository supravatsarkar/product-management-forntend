import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateProducts = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({ name: '', price: '', quantity: '' });

    // console.log()
    useEffect(() => {
        const url = `http://localhost:5000/products/updateproduct/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProduct(data);
            })
    }, [])

    const handleName = () => {

    }
    const handlePrice = () => {

    }
    const handleQuantity = () => {

    }
    return (
        <div className="container">
            <h2>Update/Edit Product</h2>

            <div className="bg-success p-1 text-white rounded shadow">
                <p>ID: {id}</p>
                <p> Product Name: {product.name}</p>
                <p>Price:{product.price}</p>
                <p>Quantity:{product.quantity}</p>
            </div>
            <form onSubmit="">
                <input type="text" onChange={handleName} value={product.name} />
                <input type="number" onChange={handlePrice} value={product.price} />
                <input type="number" onChange={handleQuantity} value={product.quantity} />
            </form>
        </div>
    );
};

export default UpdateProducts;