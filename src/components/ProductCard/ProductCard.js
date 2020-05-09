import React, { Component } from 'react';
import { Card, Slider, Button } from 'antd';
import Text from '../Text/Text';

const { Meta } = Card;

class ProductCard extends Component {
  state = {
    productQuantity: 1,
  };

  changeQuantity = value => {
    this.setState({
      productQuantity: value,
    });
  };

  render() {
    const { productName, productImage, productPrice, productStock, addMethod } = this.props;

    return(
      <Card
        hoverable
        style={{ width: 300 }}
        cover={<img alt={productName && productName.toLowerCase().split(' ').join('-')} src={productImage} />}
      >
        <Meta title={productName} description={`Price: R$ ${productPrice}`} />
        {
          productStock === 0 
          ? <Text>Estoque Indisponível</Text>
          : (
            <Slider
              min={1}
              max={productStock}
              onChange={this.changeQuantity}
              value={this.state.productQuantity}
            />
          )
        }
        <Button type="primary" onClick={() => addMethod(this.state.productQuantity, productName, productPrice, productImage)}>Adicionar ao Carrinho</Button>
      </Card>
    );
  }
};

export default ProductCard;
