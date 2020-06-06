import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import ApiService from './api/service';
import { ProtectedRoute } from './components/authentication';
import { Home, Signup, Login, EditUserProfile } from './pages';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: {},
      products: [],
      displayedProducts: [],
      chart: {
        products: [],
      },
      loggedUser: null,
    };

    this.verifyLoggedUser();
  }

  verifyLoggedUser = async () => {
    const loggedUserInfo = localStorage.getItem('logged-user-info');

    // eslint-disable-next-line react/no-direct-mutation-state
    if (loggedUserInfo) {
      this.state.loggedUser = true;
    }
  };

  async componentDidMount() {
    try {
      const products = await ApiService.listProducts();

      this.setState({
        products,
        displayedProducts: products,
      });
    } catch (error) {
      // redirecionar para uma rota de erro???
    }
  }

  logUser = () => {
    this.setState({
      loggedUser: true,
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
    });
  };

  filterProducts = searchValue => {
    const filteredProducts = this.state.products.filter(product => (
      product.productName.toLowerCase().includes(searchValue.toLowerCase())
    ));

    this.setState({ displayedProducts: filteredProducts })
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={props => <Home {...props} products={this.state.displayedProducts} addToChart={this.addToChart} filterMethod={this.filterProducts} />}
        />
        <Route
          exact
          path="/signup"
          render={props => <Signup {...props} />}
        />

        <Route
          exact
          path="/login"
          render={props => <Login {...props} logUser={this.logUser} />}
        />

        <ProtectedRoute
          exact
          path="/edit-profile"
          loggedUser={this.state.loggedUser}
          component={EditUserProfile}
          userInfo={this.state.userInfo}
        />
         <Route
          exact
          path="/auth-route"
          render={props => <AuthPage />}
        />
      </Switch>
    );
  }
}

export default App;
