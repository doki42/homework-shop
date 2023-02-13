import { useState } from "react";
import { useNavigate } from "react-router";
import { NewProduct } from "../../Components/Product";
import { INewProduct, IProduct } from "../../Interfaces";
import { Container } from "react-bootstrap";
import { addProduct } from "../../Requests/products";

/*interface NewProductProps {
    onAdd: (product: IProduct) => void;
}*/

export function AddProduct() {
    const [error, setError] = useState(false);
    let navigate = useNavigate();

    async function addProductAndRedirect(newPorduct: INewProduct) {
        try {
            const product = await addProduct(newPorduct);
           // props.onAdd(product);
            navigate('/Home')
        } catch (error) {
            console.log(error);
            setError(true);
        }
    }

    return (
        <Container>
            <NewProduct onAdd={addProductAndRedirect}/>
        </Container>
    )
}