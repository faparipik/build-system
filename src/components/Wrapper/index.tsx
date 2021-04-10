import styled from 'styled-components';

interface WrapperProps {
  align?: string;
  justify?: string;
  direction?: string;
  spacing?: string;
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  background-color: red;
  justify-content: ${props => props.justify || 'start'};
  align-items: ${props => props.align || 'normal'};
  flex-direction: ${props => props.direction || 'rows'};
  & > * {
    margin: ${props => props.spacing || 0};
  }
`;

export default Wrapper;
