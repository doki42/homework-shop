import { useState } from "react";
import { useNavigate } from "react-router";
import { NewProduct } from "../../Components/Product";
import { INewProduct } from "../../Interfaces";
import { Container, Toast, ToastContainer } from "react-bootstrap";
import { addProduct } from "../../Requests/products";



export function AddProduct() {
    const [error, setError] = useState(false);
    const [show, setShow] = useState(false);
    let navigate = useNavigate();

    async function addProductAndRedirect(newPorduct: INewProduct) {
        try {
            await addProduct(newPorduct);
            navigate('/Home')
        } catch (error) {
            console.log(error);
            setError(true);
            setShow(true);
        }
    }

    return (
        <Container>
            {error &&
            <ToastContainer position="top-end">
            <Toast bg="warning" onClose={() => setShow(false)} autohide delay={5000} show={show}>
                <Toast.Header><strong>Warning</strong></Toast.Header>
                <Toast.Body>The product is already registered!</Toast.Body>
            </Toast>
            </ToastContainer>
            }
            <NewProduct onAdd={addProductAndRedirect}/>
        </Container>
    )
}