import styled from 'styled-components';

interface FlexProps {
  align?: string;
  justify?: string;
  direction?: string;
  wrap?: string;
  basis?: string;
}

const Flex = styled.div<FlexProps>`
  display: flex;
  justify-content: ${props => props.justify || 'start'};
  align-items: ${props => props.align || 'normal'};
  flex-direction: ${props => props.direction || 'rows'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  flex-basis: ${props => props.basis || 'auto'};
`;

export default Flex;
