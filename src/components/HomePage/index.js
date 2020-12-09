import Container from '../../styles/container';

import {
  HomePageWrapper,
  HomePageContainer,
  HomePageContent,
  HomePageTitle,
  HomePageText,
  HomePageStarted,
  HomePageImage
} from './styles';

function HomePage() {
  return (
    <HomePageWrapper>
      <Container>
        <HomePageContainer>
          <HomePageContent>
            <HomePageTitle>Share your smile with the world and find friends</HomePageTitle>
            <HomePageText>Thousands of new profiles delivered weekly to your inbox</HomePageText>
            
            <HomePageStarted>
              <input type="text" />
              <button type="button">Get started</button>
            </HomePageStarted>

          </HomePageContent>
          
          <HomePageImage>
            <img src="/bg.png" alt="Shared to friend" />
          </HomePageImage>
       
        </HomePageContainer>
      </Container>
    </HomePageWrapper>
  );
}

export default HomePage;
