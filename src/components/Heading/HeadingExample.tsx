import React from 'react';
import Heading from './index';
import ExampleWrapper from '../../PreviewPage/ExampleWrapper';

const HeadingComponent: React.FC<any> = props => {
  return (
    <>
      <Heading {...props}>{props.sampleText}</Heading>
    </>
  );
};

const WrapperComponent: React.FC = () => {
  return (
    <>
      <ExampleWrapper Component={HeadingComponent} defaultProps={{ size: 'sm', sampleText: 'sample text' }} />
    </>
  );
};

export default WrapperComponent;
