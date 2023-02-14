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

   /* const convertImageToBase64 = (event: any) => {
        let file = event.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            setProduct({
                ...product,
                picture: reader.result,
            });
        }
    }*/

    return (
        <Container>
            <h1>Add a product</h1>
            <Form onSubmit={onSubmit}>
                <FormLabel>Product name</FormLabel>
                <Form.Control id={"name"} type={"text"} value={product.name} onChange={handleChange} />
                <FormLabel>Product price</FormLabel>
                <Form.Control id={"price"} type={"number"} value={product.price} onChange={handleChange}/>
                
                <FormLabel>Product picture</FormLabel>
                <Form.Control id={"picture"} type={"text"} onChange={handleChange}/>
                
                <Form.Check id={"active"} type={"checkbox"} label={"Active"} onChange={handleChange}/>
                <Button type={"submit"}>Send</Button>

            </Form>
        </Container>
    )
}