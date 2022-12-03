import React from 'react';
import { Outlet } from 'react-router-dom';
import {Container, Wrapper, Section, Link, LogoWrapper, Logo, Name} from './style';
import {navbar} from '../../utils/navbar';

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Section>
          <LogoWrapper>
            <Logo/>
            <Name>Shokhboz</Name>
          </LogoWrapper>
        </Section>
        <Section>
          {
            navbar.map(({title, id, path})=> {
               return <Link to={path} key={id}>{title}</Link>
            })
          }
        </Section>
      </Wrapper>
      <Outlet/>
    </Container>
  )
}

export default Navbar
