import styled from 'styled-components';

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  > button:not(:first-of-type) {
    margin-left: var(--space-size-400);
  }
`;

export default function ButtonWrapper({ children }) {
  return <StyledButtonWrapper>{children}</StyledButtonWrapper>;
}
