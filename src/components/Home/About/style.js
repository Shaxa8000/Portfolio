import styled from 'styled-components';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 70px 0;
`;

const HeadWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  /* margin-bottom: 48px; */
`;

HeadWrapper.Head = styled.div`
  font-family: 'Fira Code';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 42px;
  color: #FFFFFF;
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
`

const LeftBox = styled.div`
  margin-top: 50px;
  position: relative;
`;

LeftBox.Rectangle = styled.img`
  position: absolute;
  top: 60px;
  left: -130px;
`

LeftBox.Title = styled.p`
  font-family: 'Fira Code';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: #ABB2BF;
  margin: 15px 0 20px 0;
  width: 80%;
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
`;

const RightBox = styled.div`
  position: relative;
`;

RightBox.Image = styled.img`
  margin-top: -60px;
`;

RightBox.Dots = styled.img`
  position: absolute;
  top: 0;
  left: 0;
`;

RightBox.SmallDots = styled.img`
  position: absolute;
  bottom: 150px;
  right: 15px;
`;

RightBox.MediumDots = styled.img`
  position: absolute;
  right: -125px;
  bottom: 90px;
`;

RightBox.Line = styled.div`
  width: 271px;
  height: 1px;
  background: #C778DD;
  margin: -5px 0 0 43px;
`;




export {Container, HeadWrapper, BoxWrapper, LeftBox, RightBox};