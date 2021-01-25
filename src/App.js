import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { products } from "./constants";
import ProductsGrid from "./components/ProductsGrid";

class App extends Component {
  state = {
    cart: [
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
    // cart array'inin kopyasını oluştur
    const cart = [...this.state.cart];
    // parametre olarak gelen product'ın cart array'i içerisindeki index'ini bul
    const index = cart.indexOf(product);
    // kopyalanan cart array'ine bu ürünü ekle ve value property'sini 1 artır
    cart[index] = { ...cart[index] };
    cart[index].value++;
    // getItemCount fonksiyonunu kullanarak sepetteki ürün sayısını bul
    const itemCount = this.getItemCount(cart);
    // state'i güncelle
    this.setState({ cart, itemCount });
  };

  handleDecrement = (product) => {
    const cart = [...this.state.cart];
    const index = cart.indexOf(product);
    cart[index] = { ...cart[index] };
    cart[index].value--;
    const itemCount = this.getItemCount(cart);
    this.setState({ cart, itemCount });
  };

  getItemCount = (cart) => {
    // Sepetteki toplam ürün sayısını bul
    let itemCount = cart.reduce((total, product) => total + product.value, 0);

    return itemCount;
  };

  render() {
    return (
      <div className="App">
        <Navbar totalItems={this.state.itemCount} />
        <ProductsGrid
          products={products}
          cart={this.state.cart}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default App;
