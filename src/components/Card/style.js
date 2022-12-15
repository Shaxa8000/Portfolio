import styled from 'styled-components';
import {Github} from '@styled-icons/boxicons-logos/Github'


const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Container = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  width: 300px;
  height: 391px;
  border: 1px solid #ABB2BF;
`;

const Img = styled.img`
  width: 100%;
  height: 200px;
  border-bottom: 1px solid #fff;
`;

const Technology = styled.div`
  font-family: 'Fira Code';
  width: 100%;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: #ABB2BF;
  border-bottom: 1px solid #fff;
  padding: 10px;
`;

const Title = styled.div`
  font-family: 'Fira Code';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 31px;
  color: #FFFFFF;
  margin-top: 10px;
`;

const Desc = styled.div`
  font-family: 'Fira Code';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: #ABB2BF;
  margin: 10px 0;
`;

const IconWrap = styled.div`
  display: flex;
  gap: 10px;
`;

IconWrap.Button = styled.a`
  width: 109px;
  height: 37px;
  border: 1px solid #C778DD;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: #282C33;
  text-decoration: none;

  :active {
    transform: scale(0.97);
  }
`;

IconWrap.Text = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: #FFFFFF;
`;

IconWrap.GitHub = styled(Github)`
  width: 20px;
  height: 20px;
  background: #fff;
  border-radius: 3px;
  margin-right: 5px;

`



export {Main, Container, Img, Technology, Title, Desc, IconWrap};