import React from 'react';
import {Container, HeaderWrap, ContentWrap, Left, Right, Header, Line, Text} from './style';
import dots from '../../../assets/images/dots.png';
import logo from '../../../assets/images/logo.png';

const Skills = () => {
  return (
    <Container>
        <HeaderWrap>
            <HeaderWrap.Header>#skills</HeaderWrap.Header>
            <HeaderWrap.Line/>
        </HeaderWrap>
        <ContentWrap>
            <Left>
               <Left.Dots1 src={dots} />
               <Left.Box/>
               <Left.Logo src={logo}/>
               <Left.Dots2 src={dots}/>
               <Left.SmallBox/>
            </Left>
            <Right>
              <Right.Container>
                 <Right.Box1>
                   <Header>Languages</Header>
                   <Line/>
                   <Text>JavaScript TypeScript</Text>
                 </Right.Box1>
                 <Right.Wrapper>
                 <Right.Box1>
                   <Header>Libraries</Header>
                   <Line/>
                   <Text>Material UI Styled-Components</Text>
                 </Right.Box1>
                 <Right.Box1>
                   <Header>Others</Header>
                   <Line/>
                   <Text>Html Css SCss REST Api</Text>
                 </Right.Box1>
                 </Right.Wrapper>
                 <Right.Wrapper>
                  <Right.Box1>
                    <Header>Tools</Header>
                    <Line/>
                    <Text>VSCode<br/> Font-Awesome Git Figma Mobile Simulator</Text>
                  </Right.Box1>
                  <Right.Box1>
                    <Header>Frameworks</Header>
                    <Line/>
                    <Text>React Js <br/> Vue Js</Text>
                  </Right.Box1>
                 </Right.Wrapper>
              </Right.Container>

            </Right>
        </ContentWrap>
    </Container>
  )
}

export default Skills