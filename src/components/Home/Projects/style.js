import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 70px 0;
`;

const HeadWrap = styled.div`
  display: flex;
  align-items: center;
`;

HeadWrap.Header = styled.div`
  font-family: 'Fira Code';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 42px;
  color: #FFFFFF;
`;

HeadWrap.Line = styled.div`
  width: 49%;
  height: 1px;
  background: #C778DD;
  margin-left: 15px;
`


export {Container, HeadWrap};