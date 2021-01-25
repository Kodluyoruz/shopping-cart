import React from "react";
import "./ProductCard.css";
import { Card, Button, Row, Col, Badge } from "react-bootstrap";
import { MinusCircleIcon, PlusCircleIcon, CartIcon } from "../icons";

const ProductCard = ({ product, onIncrement, onDecrement, cart }) => {
  const isInCart = () => {
    return cart.find((cartItem) => cartItem.id === product.id);
  };

  const item = isInCart();

  return (
    <Col style={{ margin: "30px 0px" }}>
      <Card className="">
        <Card.Img className="image" src={product.image} alt={product.title} />
        <Card.Body className="d-flex flex-column">
          <Card.Title tag="h5">{product.title}</Card.Title>
          <Card.Subtitle tag="h6" className="mb-2 text-muted">
            {product.subtitle}
          </Card.Subtitle>
          <Card.Text className="text">{product.description}</Card.Text>
          <Row>
            {item && item.quantity > 0 && (
              <>
                <Col>
                  <Button
                    variant="danger"
                    size="lg"
                    onClick={() => onDecrement(product.id)}
                    style={{ marginTop: "auto" }}
                  >
                    <MinusCircleIcon />
                  </Button>
                </Col>
                <Col>
                  <Badge
                    variant="secondary"
                    style={{ fontSize: 30, width: "100%" }}
                  >
                    {item.quantity}
                  </Badge>
                </Col>
                <Col>
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => onIncrement(product.id)}
                    style={{ marginTop: "auto" }}
                  >
                    <PlusCircleIcon />
                  </Button>
                </Col>
              </>
            )}

            {!item && (
              <Col>
                <Button
                  variant="primary"
                  onClick={() => onIncrement(product.id)}
                  style={{ marginTop: "auto" }}
                >
                  Add to Cart
                  <CartIcon />
                </Button>
              </Col>
            )}
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;
