import React, { Component } from 'react';
import './App.css';
import actionFigures from './assets/images';

import ProductCard from './components/ProductCard/ProductCard';

const products = [
  {
    name: 'Iron Man Action Figure',
    price: 200,
    stock: 5,
    image: actionFigures.ironMan,
  },
  {
    name: 'Captain Amarica Action Figure',
    price: 180,
    stock: 0,
    image: actionFigures.captainAmerica,
  },
  {
    name: 'Hulk Action Figure',
    price: 200,
    stock: 2,
    image: actionFigures.hulk,
  },
  {
    name: 'Spider Man Action Figure',
    price: 130,
    stock: 6,
    image: actionFigures.spiderMan,
  },
];

class App extends Component {
  state = {
    chart: {
      products: [],
    }
  };

  addToChart = (productQuantity, productName, productPrice, productImage) => {
    const selectedProduct = {
      productQuantity, productName, productPrice, productImage,
    };

    const newChart = { ...this.state.chart };

    newChart.products.push(selectedProduct);

    this.setState({
      chart: newChart,
    }, () => {
      console.log(this.state.chart)
    });

  };

  displayProducts = () => {
    const productsArray = products.map((product, index) => {
      return (
        <div>
          <ProductCard
            key={`product-card-${index + 1}`}
            productName={product.name}
            productImage={product.image}
            productPrice={product.price}
            productStock={product.stock}
            addMethod={this.addToChart}
          />
        </div>
      );
    });

    return productsArray;
  };

  render() {
    return (
      <div>
        <h1>Hello</h1>
        {this.displayProducts()}
      </div>
    );
  }
}

export default App;
