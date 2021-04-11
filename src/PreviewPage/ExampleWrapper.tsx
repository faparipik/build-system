import React, { useState } from 'react';
import { Wrapper } from '../components';
import Input from './InputField';

interface PropsTypes {
  defaultProps: Object;
  Component: any;
}

interface WrapperProps {
  align?: string;
  justify?: string;
  direction?: string;
  spacing?: string;
}

const ExampleWrapper: React.FC<PropsTypes> = ({ Component, defaultProps }) => {
  const [propsValues, setPropsValues] = useState<WrapperProps>(defaultProps);
  const handleChange = (e: { preventDefault: () => void; target: { name: string; value: any } }) => {
    e.preventDefault();
    const { name, value } = e.target;
    setPropsValues({ ...propsValues, [name]: value });
  };
  return (
    <>
      <Wrapper align='center' justify='center' direction='column' w='85vw'>
        <Wrapper direction='column' w='84vw' align='center' justify='center' mb='15%' border>
          <Component {...propsValues} />
        </Wrapper>
        <Wrapper direction='column' w='85vw' align='center' justify='center' spacing='50px'>
          {Object.entries(propsValues).map(([key, value]) => {
            return <Input type='text' label={key} name={key} value={value} onChange={handleChange} />;
          })}
        </Wrapper>
      </Wrapper>
    </>
  );
};

export default ExampleWrapper;
