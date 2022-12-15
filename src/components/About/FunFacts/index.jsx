import React from 'react';
import {Container, Header, BodyWrap, Left, Info, Right, Rectangle} from './style';
import logo from '../../../assets/images/logo.png';
import dots from '../../../assets/images/dots.png';
import rectangle from '../../../assets/images/rectangle.png';


const FunFacts = () => {
  return (
    <Container>
        <Header>#my-fun-facts</Header>
        <BodyWrap>
          <Left>
            <Left.Wrap>
              <Info>My favourite movie is 'Titanic'</Info>
              <Info>I like playing Volleyball</Info>
            </Left.Wrap>
            <Left.Wrap>
              <Info>I like winter more than summer</Info>
              <Info>I like driving a car</Info>
            </Left.Wrap>
            <Left.Wrap>
              <Info>I like reading fantastic books</Info>
              <Info>I have 2 siblings</Info>
            </Left.Wrap>
          </Left>
          <Right>
             <Right.Logo src={logo}/>
             <Right.Dots src={dots}/>
          </Right>
        </BodyWrap>
        <Rectangle src={rectangle}/>
    </Container>
  )
}

export default FunFacts
