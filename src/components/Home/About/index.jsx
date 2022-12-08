import React from 'react';
import {Container, HeadWrapper, BoxWrapper, LeftBox, RightBox  } from './style';
import about from '../../../assets/images/about.png';
import dots from '../../../assets/images/dots.png';
import smallDots from '../../../assets/images/small-dots.png';
import mediumDots from '../../../assets/images/medium-dots.png';
import rectangle from '../../../assets/images/rectangle.png';

const About = () => {
  return (
    <Container>
      <HeadWrapper>
        <HeadWrapper.Head>#about-me</HeadWrapper.Head>
        <HeadWrapper.Line/>
      </HeadWrapper>
      <BoxWrapper>
        <LeftBox>
          <LeftBox.Rectangle src= {rectangle}/>
          <LeftBox.Title>Hello, I'm Shokhboz!</LeftBox.Title>
          <LeftBox.Title>I’m a self-taught front-end developer based in Samarkand, Uzbekistan. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.</LeftBox.Title>
          <LeftBox.Title>Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</LeftBox.Title>
          <LeftBox.Button>Read more...</LeftBox.Button>
        </LeftBox>
        <RightBox>
          <RightBox.Image src={about}/>
          <RightBox.Dots src={dots}/>
          <RightBox.SmallDots src={smallDots}/>
          <RightBox.MediumDots src={mediumDots}/>
          <RightBox.Line/>
        </RightBox>
      </BoxWrapper>
    </Container>
  )
}

export default About