import React, {useState} from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import {Container, SocialWrap, Line, Wrapper, Section, Link, LogoWrapper, Logo, Name, Hamburger, Close, DrawerWrap, DrawerItem, Select, Option, SocialsWrap} from './style';
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
      <Hamburger onClick={showDrawer}/>
      <Drawer
        // title="Basic Drawer"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
        className="color"
      >
       <Close.Wrap>
        <Logo/>
        <Name>Shokhboz</Name>
        <Close className='close-btn' onClick={onClose}/>
       </Close.Wrap>
        <DrawerWrap>
        {
          navbar.map((value)=>{
             return(
              !value.hidden &&(
              <DrawerItem className={({isActive}) => isActive && 'active'} key={value.id} to={value.path}>
                  {value.title}
              </DrawerItem>
            ))
          })
        }
        </DrawerWrap>
        <Select name="language" id="language">
           <Option value="language">ENG</Option>
           <Option value="language">RUS</Option>
           <Option value="language">UZB</Option>
        </Select>
        <SocialsWrap>
          <SocialWrap.Git className='size'/>
          <SocialWrap.Internet className='size'/>
          <SocialWrap.Figma className='size'/>
        </SocialsWrap>
      </Drawer>
      </Wrapper>
      <Outlet/>
    </Container>
  )
}

export default Navbar
