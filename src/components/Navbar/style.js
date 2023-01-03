import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import { ReactComponent as logo } from '../../assets/icons/logo.svg';
import { ReactComponent as github } from '../../assets/icons/github.svg';
import { ReactComponent as internet } from '../../assets/icons/internet.svg';
import { ReactComponent as figma } from '../../assets/icons/figma.svg';
import { ReactComponent as hamburger } from '../../assets/icons/hamburger.svg';
import { ReactComponent as close } from '../../assets/icons/close.svg';

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const Line = styled.div`
  width: 2px;
  background: #ABB2BF;
  height: 160px;
  position: absolute;
  left: 32px;

  @media(max-width: 376px){
      display: none;
   }
`;

const SocialWrap = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 10px;
   position: absolute;
   left: 21px;
   top: 180px;

   @media(max-width: 376px){
      display: none;
   }
`;

SocialWrap.Git = styled(github)``;
SocialWrap.Internet = styled(internet)``;
SocialWrap.Figma = styled(figma)``;


const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 130px;

  .color {
    color: #fff;
  }

  @media(max-width: 834px){
    padding: 0 100px;
  }

  @media(max-width: 376px){
    padding: 0 15px;
  }
`;

const Section = styled.div`
  cursor: ${({logo}) => logo && 'pointer'};

  .active {
    color: var(--colorSecondary);
  }
`;

Section.Child = styled.div`
  @media(max-width: 376px){
    display: none;
  }
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: var(--colorPrimary);
  margin: 0 16px;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const Logo = styled(logo)`
  width: 20px;
  height: 20px;
`;

const Name = styled.div`
  font-family: 'Fira Code';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  color: var(--colorSecondary);
`;

const Hamburger = styled(hamburger)`
  display: none;
  cursor: pointer;

  @media(max-width: 376px){
    display: block;
  }
`;

const Close = styled(close)`
  position: absolute;
  right: 25px;
  top: 25px;
  color: #fff;
`;

Close.Wrap = styled.div`
  display: flex;
  align-items: space-between;
  gap: 8px;
`;

const DrawerWrap = styled.div`
   margin-top: 55px;
`;

const DrawerItem = styled(NavLink)`
  display: flex;
  flex-direction:column;
  gap: 32px;
  font-family: 'Fira Code';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 70px;
  color: #fff;
`;

const Select = styled.select`
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 15px;
  background: #282C33;
  color: #fff;
  margin: 32px 0px 80px 0px;
  border: none;
`;

const Option = styled.option`
  font-size: 16px;
  border: none;
`;

const SocialsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;

  .size {
    width: 40px;
    height: 40px;
  }
`;



export {Container, SocialWrap, Line, Wrapper, Section, Link, LogoWrapper, Logo, Name, Hamburger, Close, DrawerWrap, DrawerItem, Select, Option, SocialsWrap};