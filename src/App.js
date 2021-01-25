import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { products } from "./constants";
import ProductsGrid from "./components/ProductsGrid";

class App extends Component {
  state = {
    products: [
      { id: 0, value: 0 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
    itemCount: 0,
  };

  handleIncrement = (product) => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    products[index].value++;
    const itemCount = this.getItemCount(products);
    this.setState({ products, itemCount });
  };

  handleDecrement = (product) => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    products[index].value--;
    const itemCount = this.getItemCount(products);
    this.setState({ products, itemCount });
  };

  getItemCount = (products) => {
    // Sepetteki toplam ürün sayısı bulunuyor
    let itemCount = products.reduce(
      (total, product) => total + product.value,
      0
    );

    return itemCount;
  };

  render() {
    return (
      <div className="App">
        <Navbar totalItems={this.state.itemCount} />
        <ProductsGrid
          products={products}
          productsInfo={this.state.products}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default App;
