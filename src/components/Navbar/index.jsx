import React, {useState} from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import {Container, SocialWrap, Line, Wrapper, Section, Link, LogoWrapper, Logo, Name, Hamburger, Close} from './style';
import {navbar} from '../../utils/navbar';
import { Drawer } from 'antd';


const Navbar = () => {

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('left');

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

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
          <Section.Child>
             {
               navbar.map(({title, id, path})=> {
                  return <Link className={({isActive}) => isActive && 'active'} to={path} key={id}>{title}</Link>
               })
             }
          </Section.Child>
        </Section>
        {/* <Space>
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
      </Space> */}
      <Hamburger onClick={showDrawer}/>
      <Drawer
        title="Basic Drawer"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
        className="color"
      >
        <Close onClick={onClose}/>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
      </Wrapper>
      <Outlet/>
    </Container>
  )
}

export default Navbar
