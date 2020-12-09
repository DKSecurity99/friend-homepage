import styled from 'styled-components';

export const HomePageWrapper = styled.main`
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  padding: 4rem 0;
`;

export const HomePageContainer = styled.article`
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

export const HomePageContent = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;


  @media (min-width: 740px) {
    margin-right: 1.5rem;
  }
`;

export const HomePageTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.mobile.lg};
  color: ${({ theme }) => theme.colors.darkBlue};
  line-height: 1.4;
  font-weight: 600;
  text-align: left;
`;

export const HomePageText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.mobile.sm};
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.4;
  text-align: left;
  margin: 6rem 0;
`;

export const HomePageStarted = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  margin-bottom: 8rem;

  > input {
    width: calc(100% - 16rem);
    border-left: 2px solid ${({ theme }) => theme.colors.cyan};
    border-top: 2px solid ${({ theme }) => theme.colors.cyan};
    border-bottom: 2px solid ${({ theme }) => theme.colors.cyan};
    border-top-left-radius: 2rem;
    border-bottom-left-radius: 2rem;

    position: absolute;
    left: 0;

    padding: 1rem 4rem 1rem 2rem;
    background: none;
    font-size: ${({ theme }) => theme.fontSizes.mobile.sm};
    color: ${({ theme }) => theme.colors.gray};
  }

  > button {
    width: 18rem;
    padding: 0.9rem;
    background: ${({ theme }) => theme.colors.cyan};
    font-size: ${({ theme }) => theme.fontSizes.mobile.md};
    color: ${({ theme }) => theme.colors.white};
    font-weight: 600;
    border-radius: 2rem;
    border: none;

    position: absolute;
    right: 0;
  }
`;

export const HomePageImage = styled.div`
  width: 100%;

  > img {
    width: 100%;
    height: auto;
    object-fit: cover;
    display: block;
  }
`;
