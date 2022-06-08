import Link from 'next/link';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition: var(--transition-duration) var(--transition-easing);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--color-primary-500);
  border-radius: 0.25rem;
  width: ${(props) => (props.full ? '100%' : 'auto')};
  padding: var(--space-size-300) var(--space-size-400);
  background-color: ${(props) =>
    props.primary ? 'var(--color-primary-500)' : 'var(--color-white)'};
  cursor: pointer;
  font-size: var(--text-size-300);
  line-height: 1;
  font-weight: 500;
  text-align: center;
  color: ${(props) => (props.primary ? 'var(--color-white)' : 'var(--color-primary-500)')};
  white-space: nowrap;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.25), 0 2px 4px -2px rgba(0, 0, 0, 0.25);
  }
`;

export default function Button({ href, label, primary, full }) {
  return (
    <Link href={href} as={href}>
      <StyledButton primary={primary} full={full}>
        {label}
      </StyledButton>
    </Link>
  );
}
