import React from 'react';
import {Container, Wrapper, HeadWrap, ArrowWrap, CardWrap} from './style';
import {projects} from '../../../utils/projects';
import Card from '../../Card';
const Projects = () => {
  return (
    <Container>
       <HeadWrap>
        <Wrapper>
          <HeadWrap.Header>#projects</HeadWrap.Header>
          <HeadWrap.Line/>
        </Wrapper>
        <ArrowWrap>
          <HeadWrap.Text>View all</HeadWrap.Text>
          <HeadWrap.Arrow/>
        </ArrowWrap>
       </HeadWrap>
       <CardWrap>
          {
            projects.map((value)=>{
               return (
                !value.hidden &&(
                 <Card key={value.id} info={value}/>
               ))
            })
          }
       </CardWrap>
    </Container>
  )
}

export default Projects