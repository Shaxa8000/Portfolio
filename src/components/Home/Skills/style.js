import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
`;

const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 15px;
`;

HeaderWrap.Header = styled.div`
  font-family: 'Fira Code';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 42px;
  color: #FFFFFF;
`;

HeaderWrap.Line = styled.div`
  width: 100%;
  height: 1px;
  max-width: 239px;
  background: #fff;
`;

const ContentWrap = styled.div`
  display: flex;
`

const Left = styled.div`
  
`;


const Right = styled.div`
  
`



export {Container, HeaderWrap, Left, Right, ContentWrap};