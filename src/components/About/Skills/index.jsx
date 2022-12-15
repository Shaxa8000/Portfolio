import React from 'react';
import {Container, Header, BoxWrap, Box, Border, Title, Info} from './style';

const Skills = () => {
  return (
    <Container>
      <Header>#skills</Header>
      <BoxWrap>
        <Box>
          <Title>Languages</Title>
          <Border/>
          <Info>JavaScript</Info>
          <Info>TypeScript</Info>
        </Box>
        <Box>
          <Title>Other</Title>
          <Border/>
          <Info>Html Css SCss</Info>
          <Info>REST</Info>
        </Box>
        <Box>
          <Title>Tools</Title>
          <Border/>
          <Info>VSCode Figma</Info>
          <Info>Git GitHub</Info>
          <Info>Font Awesome</Info>
        </Box>
        <Box>
          <Title>Frameworks</Title>
          <Border/>
          <Info>React js</Info>
          <Info>Next Js basic</Info>
        </Box>
      </BoxWrap>
    </Container>
  )
}

export default Skills
