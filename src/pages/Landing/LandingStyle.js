import styled from 'styled-components';

export const Nav = styled.nav`
  width: var(--fluid-width);
  max-width: var(--max-width);
  margin: 0 auto;
  height: var(--nav-height);
  display: flex;
  align-items: center;
`;

export const Page = styled.div`
  min-height: calc(100vh - var(--nav-height));
  display: grid;
  align-items: center;
  margin-top: -3rem;

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 3rem;
  }
`;

export const H1 = styled.h1`
  font-weight: 700;

  span {
    color: var(--primary-500);
  }
`;

export const P = styled.p`
  color: var(--grey-600);
`;

export const MainImg = styled.img`
  display: none;

  @media (min-width: 992px) {
    display: block;
  }
`;