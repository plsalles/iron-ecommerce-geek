import React, { Component } from 'react';
import { Input as InputAntD } from 'antd';

class Input extends Component {
  state = {
    value: '',
  };

  onChange = e => {
    this.setState({
      value: e.target.value,
    }, () => {
      this.props.filterMethod(this.state.value);
    });
  }

  render() {
    const { placeholder, type, name } = this.props;

    return (
      <InputAntD
        placeholder={placeholder}
        type={type}
        value={this.state.value}
        name={name}
        onChange={(e) => this.onChange(e)}
      />
    );
  }
}

export default Input;
