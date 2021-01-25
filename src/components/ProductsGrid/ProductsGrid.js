import React from "react";
import ProductCard from "../ProductCard";
import { Container, Row } from "react-bootstrap";

const ProductsGrid = ({ products, onIncrement, onDecrement, cart }) => {
  return (
    <Container>
      <Row sm="2" md="3">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            cart={cart}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))}
      </Row>
    </Container>
  );
};

export default ProductsGrid;
