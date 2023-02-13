import React, { useState } from "react";
import { INewProduct } from "../../Interfaces";
import { Container, Form, Button, FormLabel } from "react-bootstrap";

interface NewProductProps {
    onAdd: (product: INewProduct) => void;
}

export function NewProduct(props: NewProductProps) {
    const [product, setProduct] = useState<INewProduct>({
        name: '',
        price: 0,
        picture: '',
        active: false
    })

    function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setProduct({
            name: '',
            price: 0,
            picture: '',
            active: false
        });
        props.onAdd(product);
    }

    const handleChange = (event: any) => {
        setProduct({
            ...product,
            [event.target.id]: event.target.value,
        });
    }

    return (
        <Container>
            <h1>Add a product</h1>
            <Form onSubmit={onSubmit}>
                <FormLabel>Product name</FormLabel>
                <Form.Control id={"name"} type={"text"} value={product.name} onChange={handleChange} />
                <FormLabel>Product price</FormLabel>
                <Form.Control id={"price"} type={"number"} value={product.price} onChange={handleChange}/>
                
                {/*TODO: implement the imege upload and converter function*/}
                <FormLabel>Product picture</FormLabel>
                <Form.Control id={"picture"} type={"text"} value={product.picture} onChange={handleChange}/>
                <FormLabel>Active</FormLabel>
                <Form.Control id={"active"} type={"checkbox"} onChange={handleChange}/>
                <Button type={"submit"}>Send</Button>

            </Form>
        </Container>
    )
}