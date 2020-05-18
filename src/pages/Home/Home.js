import React from 'react';
import { GeneralTemplate } from '../../templates';
import { Row, Col } from 'antd';
import { HomeContent } from '../../components/organisms';
import { FormSearchProducts } from '../../components/molecules';

const Home = ({ products, filterMethod, addToChart }) => {
  return (
    <GeneralTemplate>
      <Row gutter={24}>
        <Col span={6}>
        </Col>
        <Col span={12}>
          <FormSearchProducts filterMethod={filterMethod} />
        </Col>
        <Col span={6}>
        </Col>
      </Row>

      <HomeContent products={products} addToChart={addToChart}/>
    </GeneralTemplate>
  );
};

export default Home;
