import React from 'react';
import {Container, Line, Body, Left, Right, CopyRight} from './style';
const Footer = () => {
  return (
    <Container>
       <Line/>
       <Body>
         <Left>
          <Left.Wrapper>
           <Left.Logo/>
           <Left.Name>Shokhboz</Left.Name>
           <Left.Mail>shokhbozyakhayev@gmail.com</Left.Mail>
          </Left.Wrapper>
          <Left.Info>Web designer and front-end developer based in Uzbekistan</Left.Info>
         </Left>
         <Right>
           <Right.Header>Media</Right.Header>
           <Right.IconWrap>
             <Right.GitHub/>
             <Right.Figma/>
             <Right.Game/>
           </Right.IconWrap>
         </Right>
       </Body>
       <CopyRight>© Copyright 2022. Made by Shokhboz</CopyRight>
    </Container>
  )
}

export default Footer
