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

const Title = styled.div`
  font-family: 'Fira Code';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: #FFFFFF;
  margin: 50px 0px;

  @media(max-width: 376px){
    margin: 20px 0 30px 0;
    font-size: 36px;
    text-align: center;
  }
`;

const Header = styled.div`
  font-family: 'Fira Code';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 42px;
  color: #FFFFFF;
  margin-bottom: 48px;

  @media(max-width: 376px){
    display: none;
  }
`;


export {Container, Wrapper, Title, Header}