import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Product } from "../../Components/Products";
import { IProduct } from "../../Interfaces";
import { getProducts } from "../../Requests/products";

export function Home() {
    const [productsLoaded, setProductsLoaded] = useState(false);
    const [products, setProducts] = useState<IProduct[]>([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!productsLoaded) {
            getProducts()
            .then(products => {
                setProducts(products);
                setProductsLoaded(true);
            })
            .catch(err => {
                console.log(err);
                setError(true);
            });
        }
    })

    return (
        <Container>
            {products.map(product => <Product product={product} key={product.id}/>)}
        </Container>
    )
}