import styled from 'styled-components';
import {ReactComponent as logo} from '../../../assets/icons/main.svg';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 50px 0px;

  @media(max-width: 376px){
    flex-direction: column;
  }
`

const Left = styled.div`
  flex: 1;
`;

Left.Header = styled.div`
  font-family: 'Fira Code';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 42px;
  color: #FFFFFF;

  @media(max-width: 376px){
    font-size: 28px;
    width: 100%;
    padding: 0 15px;
    text-align: center;
  }
`;

Left.Info = styled.div`
  font-family: 'Fira Code';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  color: #ABB2BF;
  margin: 32px 0px;
  width: 95%;

  @media(max-width: 376px){
    width: 100%;
    padding: 0 15px;
    text-align: center;
  }
`;

Left.Button = styled.button`
  width: 148px;
  height: 37px;
  border: 1px solid #C778DD;
  font-family: 'Fira Code';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: #FFFFFF;
  background: #282C33;
  cursor: pointer;

  :active {
        transform: scale(0.97);
    }

    @media(max-width: 376px){
      display: none;
    }
`;

const Right = styled.div`
  flex:1;
  position: relative;
`;

Right.Logo = styled(logo)`
  position: absolute;
  left: -10px;
  top: 80px;
  z-index: -1;

  @media(max-width: 376px){
    left: 10px;
  }
`;

const Image = styled.img`
  @media(max-width: 376px){
    width: 350px;
    padding: 0 15px;
  }
`;
const DotsImage = styled.img`
  position: absolute;
  right: 65px;
  bottom: 65px;
`;

Right.Box = styled.div`
  display: flex;
  align-items: center;
  width: 402px;
  height: 37px;
  background: #282C33;
  border: 1px solid #ABB2BF;
  position: absolute;
  bottom: -20px;
  left: 18px;
`;

Right.InnerBox = styled.div`
  width: 16px;
  height: 16px;
  background: #C778DD;
  margin-left: 8px;
`;

Right.InnerText = styled.div`
  font-family: 'Fira Code';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: #ABB2BF;
  margin-left: 10px;
`;

const Quote = styled.div`
  width: 70%;
  height: 95px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #282C33;
  border: 1px solid #ABB2BF;
  margin: 50px 0;
  position: relative;
`;

Quote.Text = styled.div`
  font-family: 'Fira Code';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 31px;
  color: #FFFFFF;
`;

const QuoteMark = styled.img`
  position: absolute;
  background-color: #282C33;
  padding: 0 8px;
  left: 11px;
  top: -10px;
  z-index: 1;
`;

const QuoteMarkBottom = styled.img`
  position: absolute;
  background-color: #282C33;
  padding: 0 8px;
  right: 11px;
  bottom: -10px;
  z-index: 1;
`;

Quote.Author = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 162px;
  height: 63px;
  border: 1px solid #ABB2BF;
  position: absolute;
  top: 93px;
  right: 0;
  z-index: -1;
`;

export {Container, Wrapper, Left, Right, Image, DotsImage, Quote, QuoteMark, QuoteMarkBottom  };