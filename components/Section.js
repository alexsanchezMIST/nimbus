import styled from 'styled-components';

const StyledSection = styled.section`
  position: relative;
  padding-block: var(--space-size-900);
`;

export default function Section({ children }) {
  return <StyledSection>{children}</StyledSection>;
}
