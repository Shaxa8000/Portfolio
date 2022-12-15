import React from 'react';
import {Main, Container, Img, Technology, Title, Desc, IconWrap} from './style';

const Card = ({info}) => {
  return (
   <Main>
    <Container>
        <Img src={info.img}/>
        <Technology>{info.technology}</Technology>
        <Title>{info.title}</Title>
        <Desc>{info.desc}</Desc>
        <IconWrap>
            <IconWrap.Button href={info.netlify} target='_blank'>
                <IconWrap.Text>Go live</IconWrap.Text>
            </IconWrap.Button>
            <IconWrap.Button href={info.github} target='_blank'>
                <IconWrap.GitHub/>
                <IconWrap.Text>Code</IconWrap.Text>
            </IconWrap.Button>
        </IconWrap>
    </Container>
    </Main>
  )
}

export default Card