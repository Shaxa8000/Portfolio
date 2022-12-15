import styled from 'styled-components';
import {ReactComponent as logo} from '../../assets/icons/logo.svg';
import {ReactComponent as github} from '../../assets/icons/github.svg';
import {ReactComponent as figma} from '../../assets/icons/figma.svg';
import {ReactComponent as game} from '../../assets/icons/game.svg';


const Container = styled.div`
  margin-top: 100px;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ABB2BF;
  margin-bottom: 35px;
`;

const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1440px;
  padding: 0 136px;
  margin-bottom: 50px;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

Left.Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

Left.Logo = styled(logo)`
  width: 40px;
  height: 30px;
`;

Left.Mail = styled.div`
  font-family: 'Fira Code';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: #ABB2BF;
  margin-left: 25px;
`;

Left.Name = styled.div`
  font-family: 'Fira Code';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 31px;
  color: #FFFFFF;
`;

Left.Info = styled.div`
  font-family: 'Fira Code';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: #FFFFFF;
  margin-left: 10px;
  width: 90%;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

Right.Header = styled.div`
  font-family: 'Fira Code';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 31px;
  color: #FFFFFF;
`;

Right.IconWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

Right.GitHub = styled(github)`
  width: 20px;
  height: 20px;
`;

Right.Figma = styled(figma)`
  width: 20px;
  height: 20px;
`;

Right.Game = styled(game)`
  width: 20px;
  height: 20px;
`;

const CopyRight = styled.div`
  font-family: 'Fira Code';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: #ABB2BF;
  text-align: center;
  margin-bottom: 30px;
`;




export {Container, Line, Body, Left, Right, CopyRight};