import styled from 'styled-components';

interface WrapperProps {
  align?: string;
  justify?: string;
  direction?: string;
  spacing?: string;
  w?: string;
  mt?: string;
  mb?: string;
  ml?: string;
  mr?: string;
  border?: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  justify-content: ${props => props.justify || 'start'};
  align-items: ${props => props.align || 'normal'};
  width: ${props => props.w || 'auto'};
  margin-top: ${props => props.mt || 'auto'};
  margin-bottom: ${props => props.mb || 'auto'};
  margin-left: ${props => props.ml || 'auto'};
  margin-right: ${props => props.mr || 'auto'};
  border: ${props => (props.border ? '1px solid #b3b3b3' : 'no-border')};
  flex-direction: ${props => props.direction || 'rows'};
  & > * {
    margin: ${props => props.spacing || 0};
  }
`;

export default Wrapper;
