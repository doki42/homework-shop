import { IProduct } from "../../Interfaces";
import { Card, Table } from 'react-bootstrap';
import { Button } from "react-bootstrap";

interface ProductProps {
    product: IProduct;
}

export function Product(props: ProductProps) {
    return (
        <Card>
            <Card.Title>{props.product.name}</Card.Title>
            <Card.Body>
                <Card.Img id={`${props.product.id}`} src={props.product.picture} />
                <Table striped={"columns"}>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>{props.product.name}</td>
                        </tr>
                        <tr>
                            <td>Price</td>
                            <td>{props.product.price}</td>
                        </tr>
                    </tbody>
                </Table>
            </Card.Body>
            <Card.Footer>
                <Button disabled>More info...</Button>
            </Card.Footer>
        </Card>
    )
}