import React from 'react';
import {Container, Question, Body, Link, Left, Right, Wrapper} from './style';

const Contacts = () => {
  return (
    <Container>
       <Question>Who Am I?</Question>
       <Body>
         <Left>
           <Left.Text>I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</Left.Text>
         </Left>
         <Right>
            <Right.Box>
              <Right.Message>Contact me here</Right.Message>
                <Wrapper>
                    <Right.Call/>
                   <Link href='tel: +998938416775'>
                     <Right.Mail>+998938416775</Right.Mail>
                   </Link>
                </Wrapper>
                <Wrapper>
                  <Right.Telegram/>
                  <Link href='https://t.me/shaxbozyaxyoyev'>
                    <Right.Mail>https://t.me/shaxbozyaxyoyev</Right.Mail>
                  </Link>
                </Wrapper>
                <Wrapper>
                  <Right.MsgIcon/>
                  <Link href='mailto: shokhbozyakhyaev@gmail.com'>
                    <Right.Mail>shokhbozyakhyaev@gmail.com</Right.Mail>
                  </Link>
                </Wrapper>
            </Right.Box>
         </Right>
       </Body>
    </Container>
  )
}

export default Contacts
