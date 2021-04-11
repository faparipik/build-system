import React from 'react';
import styled from 'styled-components';
import Wrapper from './index';
import ExampleWrapper from '../../PreviewPage/ExampleWrapper';

const Box = styled.div`
  height: 50px;
  width: 50px;
  background-color: ${props => props.color || 'red'};
`;

const WrapperExample: React.FC = props => {
  return (
    <>
      <Wrapper {...props}>
        <Box>test1</Box>
        <Box color='yellow'>test2</Box>
        <Box color='blue'>test3</Box>
      </Wrapper>
    </>
  );
};

const WrapperComponent: React.FC = () => {
  return (
    <>
      <ExampleWrapper Component={WrapperExample} defaultProps={{ align: 'center', justify: 'center', direction: 'row', spacing: '10px' }} />
    </>
  );
};

export default WrapperComponent;
