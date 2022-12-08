import React from 'react';
import {Container, Wrapper} from './style';
import Main from './Main';
import Projects from './Projects';
import Skills from './Skills';
import About from './About';

const Home = () => {
  return (
    <Container>
      <Wrapper>
       <Main/>
       <Projects/>
       <Skills/>
       <About/>
      </Wrapper>
    </Container>
  )
}

export default Home