import React from 'react';
import {Container, Wrapper} from './style';
import Main from './Main';
import Projects from './Projects';
import Skills from './Skills';

const Home = () => {
  return (
    <Container>
      <Wrapper>
       <Main/>
       <Projects/>
       <Skills/>
      </Wrapper>
    </Container>
  )
}

export default Home