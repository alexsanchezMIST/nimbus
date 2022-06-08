import styled from 'styled-components';
import Container from './Container';

const StyledHeader = styled.header`
  position: relative;
  display: grid;
  place-items: center;
  width: 100%;
  height: var(--header-height);
  transition: all var(--transition-duration) var(--transation-easing);
  background-color: transparent;
  border-bottom: 1px solid var(--color-slate-200);

  &.is-scrolled {
    background-color: var(--color-white);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
  }
`;

export default function Header({ fixed, href }) {
  if (typeof window !== 'undefined') {
    window.onscroll = () => {
      const header = document.querySelector('#header');
      if (window.scrollY > 0) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    };
  }

  return (
    <StyledHeader id='header' fixed={fixed}>
      <Container>
        <a href={href}></a>
      </Container>
    </StyledHeader>
  );
}
