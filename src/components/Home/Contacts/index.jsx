import React from 'react';
import {Container, HeadWrapper, ContentWrapper, LeftText, Right, IconWrap} from './style';

const Contact = () => {
  return (
    <Container>
        <HeadWrapper>
           <HeadWrapper.Header>#contacts</HeadWrapper.Header>
           <HeadWrapper.Line/>
        </HeadWrapper>
        <ContentWrapper>
         <LeftText>I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</LeftText>
         <Right>
            <Right.Header>Message me here</Right.Header>
            <IconWrap>
               <IconWrap.Game/>
               <IconWrap.Text>!Shokhboz#3519</IconWrap.Text>
            </IconWrap>
            <IconWrap>
               <IconWrap.Mail/>
               <IconWrap.Text>shax@gmail.com</IconWrap.Text>
            </IconWrap>
         </Right>
        </ContentWrapper>
    </Container>
  )
}

export default Contact
