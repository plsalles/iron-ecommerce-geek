import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
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
  constructor() {
    super();
    this.state = {
      products: [],
      displayedProducts: [],
      chart: {
        products: [],
      },
      loggedUser: true,
    };

    console.log('CONSTRUCTOR DO APP CHAMADO');
  }

  async componentDidMount() {
    console.log('DID MOUNT DO APP CHAMADO!!!')
    setTimeout(() => {
      this.setState({
        products,
        displayedProducts: products,
      })
    }, 3000)
  }

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
    console.log('RENDER DO APP CHAMADO!!')
    return (
      <Switch>
        <Route
          exact
          path="/teste/:id"
          render={props => <Home {...props} products={this.state.displayedProducts} addToChart={this.addToChart} filterMethod={this.filterProducts} />}
        />
        <Route
          exact
          path="/new-route"
          render={props => <SecondPage {...props} loggedUser={this.state.loggedUser} />}
        />
      </Switch>
    );
  }
}

export default App;
