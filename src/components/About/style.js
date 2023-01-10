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

const Question = styled.div`
  font-family: 'Fira Code';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: #FFFFFF;
  margin: 70px 0px 100px 0px;

  @media(max-width: 376px){
    margin: 30px 0;
    text-align: center;
    font-size: 25px;
  }
`;

export {Container, Wrapper, Question};