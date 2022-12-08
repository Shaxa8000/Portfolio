import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  margin-bottom: 100px;
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
  flex: 1;
  position: relative;
`;

Left.Dots1 = styled.img`
  width: 63px;
  height: 63px;
  margin: 50px 0px 0px 10px;
`;

Left.Dots2 = styled.img`
  width: 63px;
  height: 63px;
  position: absolute;
  top: 160px;
  left: 180px;
`;


Left.Box = styled.div`
  width: 86px;
  height: 86px;
  border: 1px solid #ABB2BF;
  position: absolute;
  right: 150px;
  top: 10px;
`;

Left.SmallBox = styled.div`
  width: 52px;
  height: 52px;
  border: 1px solid #ABB2BF;
  position: absolute;
  right: 110px;
  top: 200px;
`;

Left.Logo = styled.img`
  width: 113px;
  height: 113px;
  position: absolute;
  top: 180px;
  left: 20px;
`;

const Right = styled.div`
  flex: 1;
  margin-top: 30px;
`;

Right.Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
Right.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

Right.Box1 = styled.div`
  width: 160px;
  height: fit-content;
  border: 1px solid #ABB2BF;
`;

const Header = styled.div`
  font-family: 'Fira Code';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  color: #FFFFFF;
  margin: 5px;
  width: 100%;
`;

const Line = styled.div`
  border: 1px solid #ABB2BF;
`;

const Text = styled.div`
  font-family: 'Fira Code';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: #ABB2BF;
  padding: 10px;
`;

export {Container, HeaderWrap, Left, Right, ContentWrap, Header, Line, Text };