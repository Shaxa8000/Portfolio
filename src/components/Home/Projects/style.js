import styled from 'styled-components';
import {ArrowRight} from '@styled-icons/bootstrap/ArrowRight';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 70px 0;
`;

const HeadWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 65px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`

HeadWrap.Header = styled.div`
  font-family: 'Fira Code';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 42px;
  color: #FFFFFF;
`;

HeadWrap.Line = styled.div`
  max-width: 495px;
  width:100%;
  height: 1px;
  background: white;
  margin-left: 15px;
`;

const ArrowWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

HeadWrap.Arrow = styled(ArrowRight)`
  width: 20px;
`;

HeadWrap.Text = styled.div`
  font-family: 'Fira Code';
  font-style: normal;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  color: #FFFFFF;
  white-space: nowrap;
  cursor: pointer;
`;

const CardWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 376px){
    flex-wrap: wrap;
  }
`


export {Container, Wrapper, HeadWrap, ArrowWrap, CardWrap};