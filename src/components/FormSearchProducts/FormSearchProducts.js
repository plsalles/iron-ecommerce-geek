import React from 'react';
import Input from '../Input/Input';

const FormSearchProducts = ({ placeholder, type, name, filterMethod }) => {
  return (
    <form>
      <Input placeholder={placeholder} type={type} name={name} filterMethod={filterMethod} />
    </form>
  );
};

export default FormSearchProducts;
