import React from 'react';
import { Col, Row } from 'antd';
import { ProductCard } from '../../molecules';

const HomeContent = ({ products, addToChart }) => {
  const displayProducts = productList => {
    const productsArray = productList.map((product, index) => {
      return (
        <Col span={6}>
          <ProductCard
            key={`product-card-${index + 1}`}
            productName={product.name}
            productImage={product.image}
            productPrice={product.price}
            productStock={product.stock}
            addMethod={addToChart}
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

  return (
    <div>
      {displayProducts(products)}
    </div>
  );
};

export default HomeContent;
