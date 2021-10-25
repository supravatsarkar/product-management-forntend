import React, { useRef } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';

const AddProducts = () => {
    const nameRef = useRef();
    const priceRef = useRef();
    const quantityRef = useRef();

    const handleAddProduct = e => {
        e.preventDefault();
        const newProduct = {
            name: nameRef.current.value,
            price: priceRef.current.value,
            quantity: quantityRef.current.value,
        }

        fetch('http://localhost:5000/products/addproduct', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert("Product added successful");
                    e.target.reset();
                }
            })

    }
    return (
        <div className="container">
            <h2> Add Products</h2>
            <Form onSubmit={handleAddProduct}>
                <input type="text" name="" id="" placeholder="Product Name*" ref={nameRef} />
                <br />
                <input type="number" name="" id="" placeholder="Price*" ref={priceRef} />
                <br />
                <input type="number" name="" id="" placeholder="Quantity*" ref={quantityRef} />
                <br />
                <input type="submit" value="Add Product" />

                {/* <FloatingLabel
                    controlId="floatingInput"
                    label="Product Name*"
                    className="mb-3"
                >
                    <Form.Control type="text" placeholder="Product Name*" />

                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Price*">
                    <Form.Control type="text" placeholder="Price*" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Quantity*">
                    <Form.Control type="number" placeholder="Price*" />
                </FloatingLabel> */}
            </Form>
        </div>
    );
};

export default AddProducts;