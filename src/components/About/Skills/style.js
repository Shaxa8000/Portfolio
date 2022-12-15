import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
`;

const Header = styled.div`
  font-family: 'Fira Code';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 42px;
  color: #FFFFFF;
  margin: 50px 0px;
`;

const BoxWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Box = styled.div`
  width: 200px;
  height: fit-content;
  border: 1px solid #ABB2BF;
`;

const Title = styled.div`
  font-family: 'Fira Code';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  color: #FFFFFF;
  padding: 10px;
`;

const Border = styled.div`
  background:#ABB2BF;
  width: 100%;
  height: 1px;
`;

const Info = styled.div`
  font-family: 'Fira Code';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: #ABB2BF; 
  padding: 5px;
`;



export {Container, Header, BoxWrap, Box, Title, Info, Border};