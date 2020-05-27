import React, { Component } from 'react';
import { GeneralTemplate } from '../../templates';
import { Row, Col } from 'antd';
import { HomeContent } from '../../components/organisms';
import { FormSearchProducts } from '../../components/molecules';

class Home extends Component {

  componentWillUnmount() {
    console.log('COMPONENTE HOME SENDO DESMONTADO!')
  }

  render() {
    console.log(this.props.match.params)

    return (
      <GeneralTemplate>
        <Row gutter={24}>
          <Col span={6}>
          </Col>
          <Col span={12}>
            <FormSearchProducts filterMethod={this.props.filterMethod} />
          </Col>
          <Col span={6}>
          </Col>
        </Row>
  
        <HomeContent products={this.props.products} addToChart={this.props.addToChart}/>
      </GeneralTemplate>
    );

  }
};

export default Home;
