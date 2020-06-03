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
            productName={product.productName}
            productImage={product.productImages[0]}
            productPrice={product.productPrice}
            productStock={product.productStock}
            addMethod={addToChart}
          />
        </Col>
      );
    });

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
