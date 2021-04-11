import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
  position: relative;

  & > input {
    border: 1px solid #eee;
    border-radius: 0.25rem;
    background-color: transparent;
    outline: none;
    padding: 12px 3px 12px 15px;
    font-size: 16px;
    transition: all 0.2s ease;
    z-index: 500;
  }
  & > label {
    color: #757575;
    position: absolute;
    top: -15px;
    left: 15px;
    transition: all 0.2s ease;
    z-index: 501;
    background: white;
  }
`;

interface InputField {
  value?: any;
  type?: string;
  label?: string;
  name?: string;
  onChange?: (e: { preventDefault: () => void; target: { name: any; value: any } }) => void;
}

const Input: React.FC<InputField> = ({ name, value, type, label, onChange }) => {
  const renderLabel = () => label && <label>{label}</label>;

  return (
    <InputContainer>
      {renderLabel()}
      <input name={name} value={value} type={type} onChange={onChange} />
    </InputContainer>
  );
};

export default Input;
