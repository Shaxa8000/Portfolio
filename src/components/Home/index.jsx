import React from 'react';
import {Container, Wrapper} from './style';
import Main from './Main';
import Projects from './Projects';

const Home = () => {
  return (
    <Container>
      <Wrapper>
       <Main/>
       <Projects/>
      </Wrapper>
    </Container>
  )
}

export default Home