import React, { Component } from 'react';
import './App.css';
import actionFigures from './assets/images';
import { Home, SecondPage } from './pages';

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
    products,
    displayedProducts: products,
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

  filterProducts = searchValue => {
    const filteredProducts = this.state.products.filter(product => (
      product.name.toLowerCase().includes(searchValue.toLowerCase())
    ));

    this.setState({ displayedProducts: filteredProducts })
  }

  render() {
    return (
      <div>
        <Home products={this.state.displayedProducts} addToChart={this.addToChart} filterMethod={this.filterProducts} />

        <SecondPage />
      </div>
    );
  }
}

export default App;
