import { IProduct } from "../../Interfaces";
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Button } from "react-bootstrap";

interface ProductProps {
    product: IProduct;
}

export function Product(props: ProductProps) {
    return (
        <Card className="mb-3">
            <Card.Title>{props.product.name}</Card.Title>
            <Card.Body>
                <Card.Img id={`${props.product.id}`} src={props.product.picture} />
                <Container>
                    <Row className="g-3">
                        <Col>Name</Col>
                        <Col>{props.product.name}</Col>
                    </Row>
                    <Row className="g-3">
                        <Col>Price</Col>
                        <Col>{props.product.price}</Col>
                    </Row>
                </Container>
            </Card.Body>
            <Card.Footer>
                <Button disabled={!props.product.active}>More info...</Button>
            </Card.Footer>
        </Card>
    )
}