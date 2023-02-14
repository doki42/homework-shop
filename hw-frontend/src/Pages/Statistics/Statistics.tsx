import {useEffect, useState} from "react";
import {Container} from 'react-bootstrap';
import { Statistics } from "../../Components/Statistics";
import { IProduct } from "../../Interfaces";
import { getProducts } from "../../Requests/products";

export function Statisztika(){
    
    const [products, setProducts] = useState<IProduct[]>([]);
    const [error, setError] = useState(false);

    useEffect(() => {
            getProducts()
            .then(products => {
                setProducts(products);
            })
            .catch(err => {
                console.log(err);
                setError(true);
            });
        
    })


    return (
        <Container>
            <Statistics products={products} />
        </Container>
    )
}