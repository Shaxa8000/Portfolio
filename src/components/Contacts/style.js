import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 0 136px;

  @media(max-width: 376px){
    padding: 0 15px;
  }
`;

export {Container, Wrapper};