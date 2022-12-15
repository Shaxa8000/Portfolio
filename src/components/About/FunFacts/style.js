import styled from 'styled-components';


const Container = styled.div`
  width: 100%;
  position: relative;
`;

const Header = styled.div`
  font-family: 'Fira Code';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 42px;
  color: #FFFFFF;
  margin: 70px 0px 30px 0px;
`;

const BodyWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
   display: flex;
   flex-direction: column;
   gap: 20px;
   flex: 2;
`

Left.Wrap = styled.div`
  display: flex;
  gap: 15px;
`;

const Info = styled.div`
  font-family: 'Fira Code';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: #ABB2BF;
  border: 1px solid #ABB2BF;
  width: fit-content;
  padding: 10px;
`;

const Right = styled.div`
  width: 100%;
  position: relative;
  flex: 1;
`;

Right.Logo = styled.img`
  position: absolute;
  right: 0;
  top: 70px;
`;


Right.Dots = styled.img`
  position: absolute;
  right: 90px;
`;

const Rectangle = styled.img`
  position: absolute;
  left: -136px;
  top: 75px;
`;




export {Container, Header, BodyWrap, Left, Info, Right, Rectangle}