import React, { Component } from 'react';
import { GeneralTemplate } from '../../templates';
import { FormEditProfile } from '../../components/molecules';

class EditUserProfile extends Component {
  render() {
    return (
      <GeneralTemplate>
        <FormEditProfile />
      </GeneralTemplate>
    );

  }
};

export default EditUserProfile;
