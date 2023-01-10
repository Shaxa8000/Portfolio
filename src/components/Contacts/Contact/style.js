import styled from 'styled-components';
import {ReactComponent as mail} from '../../../assets/icons/mail.svg';
import {Call} from '@styled-icons/fluentui-system-filled/Call';
import {Telegram} from '@styled-icons/bootstrap/Telegram';

const Container = styled.div`
  width: 100%;
`;

const Question = styled.div`
  font-family: 'Fira Code';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: #FFFFFF;
  margin: 50px 0px;

  @media(max-width: 376px){
    margin: 0 0 40px 0;
    font-size: 25px;
  }
`;

const Body = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  @media(max-width: 376px){
    display: none;
  }
`;

Left.Text = styled.div`
  font-family: 'Fira Code';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: #ABB2BF;
  width: 85%;
  text-align: justify;
`;

const Right = styled.div``;

Right.Box = styled.div`
  width: 400px;
  height: fit-content;
  border: 1px solid #ABB2BF;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;

  @media(max-width: 376px){
    width: 100%;
  }
`;

Right.Message = styled.div`
  font-family: 'Fira Code';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  color: #FFFFFF;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 10px;
`;

const Link = styled.a`
  text-decoration: none;
  color: #fff;
`;

Right.MsgIcon = styled(mail)`
  width: 28px;
  height: 28px;
`;
Right.Telegram = styled(Telegram)`
  width: 28px;
  height: 28px;
`;
Right.Call = styled(Call)`
  width: 28px;
  height: 28px;
`;
Right.Mail = styled.div`
  font-family: 'Fira Code';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: #ABB2BF;
`;

export {Container, Question, Body, Left, Right, Link, Wrapper};