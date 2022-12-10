import styled from 'styled-components';
import {ReactComponent as game} from '../../../assets/icons/game.svg';
import {ReactComponent as mail} from '../../../assets/icons/mail.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeadWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 45px;
  gap: 15px;
`;

HeadWrapper.Header = styled.div`
  font-family: 'Fira Code';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 42px;
  color: #FFFFFF;
`;

HeadWrapper.Line = styled.div`
  width: 100%;
  max-width: 127px;
  height: 1px;
  background: #C778DD;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LeftText = styled.div`
  font-family: 'Fira Code';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: #ABB2BF;
  width: 50%;
`;

const Right = styled.div`
  width: 204px;
  height: 141px;
  border: 1px solid #ABB2BF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  gap: 10px;
`;

Right.Header = styled.div`
  font-family: 'Fira Code';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  color: #FFFFFF;
`;

const IconWrap = styled.div`
  display: flex;
  gap: 5px;
`;

IconWrap.Game = styled(game)``;
IconWrap.Text = styled.div`
  font-family: 'Fira Code';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #ABB2BF;
`;

IconWrap.Mail = styled(mail)``;


export {Container, HeadWrapper, ContentWrapper, LeftText, Right, IconWrap};