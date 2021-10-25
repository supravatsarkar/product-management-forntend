import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products/manageproducts')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    const handleDelete = (id, name) => {
        const confirm = window.confirm(`Are sure? You want to delete ${name}?`);
        if (confirm) {
            const url = `http://localhost:5000/products/manageproducts/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert("Product Deleted");
                        const restProduct = products.filter(product => product._id !== id);
                        setProducts(restProduct);
                    }
                })
        }
    }

    const handleUpdate = (id, name) => {

    }

    return (
        <div className="container mx-auto">
            <h2>Manage Product </h2>
            <h4>Product Found {products.length}</h4>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Sl. No.</th>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Delete</th>
                        <th>Update/Edit</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        products.map((product, indx) =>
                            <tr key={product._id}>
                                <td>{indx + 1}</td>
                                <td>{product._id}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td><p onClick={() => handleDelete(product._id, product.name)} className="text-white bg-danger p-1 m-1 rounded-pill me-auto">Delete</p></td>
                                <td><Link to={`/products/updateproduct/${product._id}`}><p className="text-white bg-success p-1 m-1 rounded-pill me-auto">Update/Edit</p></Link></td>
                            </tr>
                        )

                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageProducts;