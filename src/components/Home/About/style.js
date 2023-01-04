import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 70px 0;

  @media(max-width: 376px){
    width: 100%;
    padding: 0 15px;
    margin-top: 40px;
  }
`;

const HeadWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  @media(max-width: 376px){
    width: 100%;
  }
`;

HeadWrapper.Head = styled.div`
  font-family: 'Fira Code';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 42px;
  color: #FFFFFF;

  @media(max-width: 376px){
    font-size: 28px;
    white-space: nowrap;
  }
`;

HeadWrapper.Line = styled.div`
  width: 100%;
  height: 2px;
  max-width: 239px;
  background: #fff;
`;

const BoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media(max-width: 376px){
    flex-direction: column;
  }

`;

const LeftBox = styled.div`
  margin-top: 50px;
  position: relative;

  @media(max-width: 376px){
    margin-top: 30px;
  }
`;

LeftBox.Rectangle = styled.img`
  position: absolute;
  top: 60px;
  left: -130px;
`;

LeftBox.Title = styled.p`
  font-family: 'Fira Code';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: #ABB2BF;
  margin: 15px 0 20px 0;
  width: 80%;

  @media(max-width: 376px){
    width: 100%;
    text-align: justify;
  }
`;

LeftBox.Button = styled.button`
  width: 148px;
  height: 37px;
  border: 1px solid #C778DD;
  background: #282C33;
  font-family: 'Fira Code';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: #FFFFFF;
  cursor: pointer;

  :active {
    transform: scale(0.97);
  }

  @media(max-width: 376px){
    display: none;
  }
`;

const RightBox = styled.div`
  position: relative;
`;

RightBox.Image = styled.img`
  margin-top: -60px;

  @media(max-width: 376px){
    width: 300px;
    margin-top: 40px;
  }
`;

RightBox.Dots = styled.img`
  position: absolute;
  top: 0;
  left: 0;

  @media(max-width: 376px){
    top: 80px;
    left: 30px;
    width: 80px;
  }
`;

RightBox.SmallDots = styled.img`
  position: absolute;
  bottom: 150px;
  right: 15px;

  @media(max-width: 376px){
    width: 100px;
  }
`;

RightBox.MediumDots = styled.img`
  position: absolute;
  right: -125px;
  bottom: 90px;

  @media(max-width: 376px){
    display: none;
  }
`;

RightBox.Line = styled.div`
  width: 300px;
  height: 1px;
  background: #C778DD;
  margin: -5px 0 0 43px;

  @media(max-width: 376px){
    margin: -5px 0 0 10px;
  }
`;




export {Container, HeadWrapper, BoxWrapper, LeftBox, RightBox};