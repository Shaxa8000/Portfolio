import React, { Fragment } from 'react';
import {Container, GitInfo, Tick, SocialsWrap, GitHub, Internet, Figma, Wrapper, Left, Right, Image, DotsImage, Quote, QuoteMark, QuoteMarkBottom} from './style';
import photo from '../../../assets/images/main.png';
import dots from '../../../assets/images/dots.png';
import quote from '../../../assets/images/quote.png';


const Main = () => {
  return (
    <Fragment>
     <GitInfo>
       <Tick/>
       <SocialsWrap>
         <GitHub/>
         <Figma/>
         <Internet/>
       </SocialsWrap>
     </GitInfo>
     <Container>
      <Wrapper>
        <Left>
          <Left.Header>I'm a <span style={{color: '#C778DD'}}>web designer</span> and <span style={{color: '#C778DD'}}>front-end developer</span></Left.Header>
          <Left.Info>He crafts responsive websites where technologies meet creativity</Left.Info>
          <Left.Button>Contact me!!</Left.Button>
         </Left>
         <Right>
           <Image src={photo} alt="main image" />
           <Right.Logo/>
           <DotsImage src={dots}/>
           <Right.Box>
             <Right.InnerBox/>
             <Right.InnerText>Currently working on Portfolio</Right.InnerText>
           </Right.Box>
         </Right>
      </Wrapper>
      <Quote>
         <Quote.Text>With great power comes great electricity bill</Quote.Text>
         <QuoteMark src={quote}/>
         <QuoteMarkBottom src={quote}/>
         <Quote.Author>- Dr. Who</Quote.Author>
      </Quote>
     </Container>
    </Fragment>
  )
}

export default Main