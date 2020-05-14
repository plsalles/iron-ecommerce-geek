import React, { Component } from 'react';
import './App.css';
import actionFigures from './assets/images';
import { Row, Col } from 'antd';

import ProductCard from './components/ProductCard/ProductCard';
import FormSearchComponents from './components/FormSearchProducts/FormSearchProducts';

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

  displayProducts = () => {
    const productsArray = this.state.displayedProducts.map((product, index) => {
      return (
        <Col span={6}>
          <ProductCard
            key={`product-card-${index + 1}`}
            productName={product.name}
            productImage={product.image}
            productPrice={product.price}
            productStock={product.stock}
            addMethod={this.addToChart}
          />
        </Col>
      );
    });

    return (
      <Row gutter={24}>
        {productsArray}
      </Row>
    );
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
        <Row gutter={24}>
          <Col span={6}>
          </Col>
          <Col span={12}>
            <FormSearchComponents filterMethod={this.filterProducts} />
          </Col>
          <Col span={6}>
          </Col>
        </Row>

        {this.displayProducts()}
      </div>
    );
  }
}

export default App;
