import React, { memo } from 'react';
import styled from 'styled-components';

const RadioWrapper = styled.label`
  display: block;
  position: relative;
  padding-left: 25px;
  cursor: pointer;
  font-size: 13px;
  user-select: none;
  font-weight: 700;
  color:white;
  line-height: 1.65;
  ${'' /* color:white */}

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 16px;
    width: 16px;
    background-color: #fff;
    border: 2px solid ${({ theme }) => "black"};
    border-radius: 50%;
    
  }

  input:checked ~ span {
    background-color: #fff;
    border: 2px solid ${({ theme }) => "black"};
    
  }

  span:after {
    content: '';
    position: absolute;
    display: none;
  }

  input:checked ~ span:after {
    display: block;

  }

  span:after {
    top: 4px;
    left: 4px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.mainColors.active};
  }
`;

const CustomRadio = ({ label, ...restProps }) => {
  return (
    <RadioWrapper htmlFor={restProps.id}>
      {label}
      <input {...restProps} type="radio" />
      <span />
    </RadioWrapper>
  );
};

export default memo(CustomRadio);
