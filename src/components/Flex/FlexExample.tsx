import React from 'react';
import styled from 'styled-components';
import Flex from './index';
import ExampleWrapper from '../../PreviewPage/ExampleWrapper';

const Box = styled.div`
  height: 50px;
  width: 50px;
  background-color: ${props => props.color || 'red'};
`;

const FlexExample: React.FC = props => {
  return (
    <>
      <Flex {...props}>
        <Box>test1</Box>
        <Box color='yellow'>test2</Box>
        <Box color='blue'>test3</Box>
      </Flex>
    </>
  );
};

const WrapperComponent: React.FC = () => {
  return (
    <>
      <ExampleWrapper
        Component={FlexExample}
        defaultProps={{ align: 'center', justify: 'center', direction: 'row', wrap: 'nowrap', basis: 'auto' }}
      />
    </>
  );
};

export default WrapperComponent;
