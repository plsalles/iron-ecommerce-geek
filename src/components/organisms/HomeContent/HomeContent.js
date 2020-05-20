import React from 'react';
import { Col, Row, Skeleton } from 'antd';
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
    console.log('HOME CONTENT MONTADO!!!', products.length)

    return products.length === 0 ? <Skeleton active /> : (
      <Row gutter={24}>
        {productsArray}
      </Row>
    )
  };

  return (
    <div>
      {displayProducts(products)}
    </div>
  );
};

export default HomeContent;
