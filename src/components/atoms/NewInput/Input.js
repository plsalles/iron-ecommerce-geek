import React from 'react';
import { InputBase, InputNormal, InputMask } from './Input.style';

const Input = ({
  label,
  name,
  mask,
  value,
  handleChange,
  handleBlur,
  isLoading,
  placeholder,
  error,
  touched,
}) => {
  const hasMask = !!mask;
  const hasError = !!error;
  const hasTouched = touched;

  return (
    <InputBase
      label={label}
      name={name}
      validateStatus={hasError && hasTouched ? 'error' : undefined}
      help={error}
    >
      {hasMask ? (
        <InputMask
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          mask={mask}
          disabled={isLoading}
          placeholder={placeholder}
          maskChar={null}
        />
      ) : (
        <InputNormal
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={isLoading}
          placeholder={placeholder}
        />
      )}
    </InputBase>
  );
};

export default Input;
