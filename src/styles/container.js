import styled from 'styled-components';

const Container = styled.article`
  width: 100%;
  max-width: 39rem;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 740px) {
    max-width: 72rem;
  }

  @media (min-width: 980px) {
    max-width: 94rem;
  }
`;

export default Container;
