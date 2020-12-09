import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  padding: 1rem 0;
  background: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid rgba(0,0,0,0.080);
`;

export const HeaderContainer = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 740px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const HeaderLogo = styled.h2`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: ${({ theme }) => theme.fontSizes.mobile.sm};
  font-weight: 600;

  > span {
    font-size: ${({ theme }) => theme.fontSizes.mobile.md};
    text-transform: uppercase;
  }
  
  text-align: center;
  margin-bottom: 1.5rem;

  @media (min-width: 740px) {
    margin-bottom: 0;
  }
`;

export const HeaderNav = styled.nav`
  display: block;
`;

export const HeaderListItems = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

    list-style: none;
  li + li {
    margin-left: 1rem;
  }

  > li > a {
    padding: 1rem;
    display: block;
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSizes.mobile.sm};
    color: ${({ theme }) => theme.colors.darkBlue};
  }
`;
