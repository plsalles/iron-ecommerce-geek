import React, { Component } from 'react';
import { GeneralTemplate } from '../../templates';
import { FormEditProfile } from '../../components/molecules';

class EditUserProfile extends Component {

  componentWillUnmount() {
    console.log('COMPONENTE HOME SENDO DESMONTADO!')
  }
  render() {
    console.log(this.props)
    return (
      <GeneralTemplate>
        <FormEditProfile userInfo={this.props.userInfo} />
      </GeneralTemplate>
    );

  }
};

export default EditUserProfile;
