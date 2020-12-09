import Container from '../../../styles/container';

import {
  HeaderWrapper,
  HeaderContainer,
  HeaderLogo,
  HeaderNav,
  HeaderListItems,
} from './styles';

export default function Header() {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderContainer>
          <HeaderLogo><span>Friend</span>.finder</HeaderLogo>
          <HeaderNav>
            <HeaderListItems>
              <li><a href="https://github.com/DKSecurity99">Team</a></li>
              <li><a href="https://github.com/DKSecurity99">Contacts</a></li>
              <li><a href="https://github.com/DKSecurity99">Issues</a></li>
              <li><a href="https://github.com/DKSecurity99">Info</a></li>
            </HeaderListItems>
          </HeaderNav>
        </HeaderContainer>
      </Container>
    </HeaderWrapper>
  );
}
