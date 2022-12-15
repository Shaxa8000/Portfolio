import React from 'react';
import All from './All';
import {Container, Wrapper, Title, Header} from './style';

const Projects = () => {
  return (
    <Container>
      <Wrapper>
        <Title>List of my projects</Title>
        <Header>#complete-apps</Header>
        <All/>
      </Wrapper>
    </Container>
  )
}

export default Projects