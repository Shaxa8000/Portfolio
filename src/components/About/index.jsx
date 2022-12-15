import React from 'react';
import {Container, Wrapper, Question} from './style';
import AboutMe from '../../components/Home/About';
import Skills from './Skills';
import FunFacts from './FunFacts';

const About = () => {
  return (
    <Container>
      <Wrapper>
         <Question>Who Am I?</Question>
         <AboutMe/>
         <Skills/>
         <FunFacts/>
      </Wrapper>
    </Container>
  )
}

export default About
