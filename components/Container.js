import styled from 'styled-components';

const StyledContainer = styled.div`
  position: relative;
  width: min(90%, var(--screen-xxl));
  margin-inline: ${(props) => (props.centered ? 'auto' : 'unset')};
  padding-inline: var(--space-range-from-400-to-900);
`;

export default function Container({ children, centered }) {
  return <StyledContainer centered={centered}>{children}</StyledContainer>;
}
