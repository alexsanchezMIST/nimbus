import styled from 'styled-components';

const StyledGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(${(props) => props.rows || '1'}, minmax(0, min-content));
  grid-template-columns: repeat(${(props) => props.columns || '1'}, minmax(0, 1fr));
  grid-gap: var(--space-size-400);
`;

export default function Grid({ children, rows, columns }) {
  return (
    <StyledGrid rows={rows} columns={columns}>
      {children}
    </StyledGrid>
  );
}
