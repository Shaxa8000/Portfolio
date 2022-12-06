import React from 'react';
import {Main, Container, Img, Technology, Title, Desc, IconWrap} from './style';
import img from '../../assets/images/portfolio.png'

const Card = ({info}) => {
  return (
   <Main>
    <Container>
        <Img src={img}/>
        <Technology>Html Css</Technology>
        <Title>Portfolio</Title>
        <Desc>Minecraft servers hosting </Desc>
        <IconWrap>
            <IconWrap.Button>
                <IconWrap.Text>Go live</IconWrap.Text>
            </IconWrap.Button>
            <IconWrap.Button>
                <IconWrap.GitHub/>
                <IconWrap.Text>Code</IconWrap.Text>
            </IconWrap.Button>
        </IconWrap>
    </Container>
    </Main>
  )
}

export default Card