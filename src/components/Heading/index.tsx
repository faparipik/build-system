import styled from 'styled-components';

interface HeadingProps {
  size?: string;
}

const Heading = styled.h2<HeadingProps>`
  font-size: ${({ theme, size = 'md' }) => theme.sizes[size]};
`;

export default Heading;
