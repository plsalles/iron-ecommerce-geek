import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import ApiService from './api/service';
import { Home, SecondPage } from './pages';

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
  }

  async componentDidMount() {
    const products = await ApiService.listProducts();

    this.setState({
      products,
      displayedProducts: products,
    });
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
      product.productName.toLowerCase().includes(searchValue.toLowerCase())
    ));

    this.setState({ displayedProducts: filteredProducts })
  }

  render() {
    console.log('RENDER DO APP CHAMADO!!')
    return (
      <Switch>
        <Route
          exact
          path="/"
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
