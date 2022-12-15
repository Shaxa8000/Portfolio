import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import {Container, SocialWrap, Line, Wrapper, Section, Link, LogoWrapper, Logo, Name} from './style';
import {navbar} from '../../utils/navbar';

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <Container>
      <Line/>
      <SocialWrap>
        <SocialWrap.Git/>
        <SocialWrap.Internet/>
        <SocialWrap.Figma/>
      </SocialWrap>
      <Wrapper>
        <Section logo>
          <LogoWrapper onClick={()=> navigate('/home')}>
            <Logo />
            <Name>Shokhboz</Name>
          </LogoWrapper>
        </Section>
        <Section>
          {
            navbar.map(({title, id, path})=> {
               return <Link className={({isActive}) => isActive && 'active'} to={path} key={id}>{title}</Link>
            })
          }
        </Section>
      </Wrapper>
      <Outlet/>
    </Container>
  )
}

export default Navbar
