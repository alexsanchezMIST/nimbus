import Link from 'next/link';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition: all var(--transition-duration) var(--transition-easing);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--color-primary-500);
  border-radius: var(--space-size-100);
  width: ${(props) => (props.full ? '100%' : 'auto')};
  padding-block: ${(props) =>
    props.large
      ? 'var(--space-size-400)'
      : props.small
      ? 'var(--space-size-200)'
      : 'var(--space-size-300)'};
  padding-inline: ${(props) =>
    props.large
      ? 'var(--space-size-500)'
      : props.small
      ? 'var(--space-size-300)'
      : 'var(--space-size-400)'};
  background-color: ${(props) =>
    props.primary ? 'var(--color-primary-500)' : 'var(--color-white)'};
  cursor: pointer;
  font-size: ${(props) =>
    props.large
      ? 'var(--text-size-400)'
      : props.small
      ? 'var(--text-size-200)'
      : 'var(--text-size-300)'};
  line-height: 1;
  font-weight: 600;
  text-align: center;
  color: ${(props) => (props.primary ? 'var(--color-white)' : 'var(--color-primary-500)')};
  white-space: nowrap;

  &:hover {
    background-color: ${(props) => (props.primary ? 'var(--color-primary-600)' : null)};
    border-color: var(--color-primary-600);
    color: ${(props) => (props.primary ? 'null' : 'var(--color-primary-600)')};
  }

  &:active {
    background-color: ${(props) => (props.primary ? 'var(--color-primary-400)' : null)};
    border-color: var(--color-primary-400);
    color: ${(props) => (props.primary ? 'null' : 'var(--color-primary-400)')};
  }
`;

export default function Button({ href, label, primary, full, large, small }) {
  return (
    <Link href={href} as={href}>
      <StyledButton primary={primary} full={full} large={large} small={small}>
        {label}
      </StyledButton>
    </Link>
  );
}
