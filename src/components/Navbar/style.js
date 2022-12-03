import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import { ReactComponent as logo } from '../../assets/icons/logo.svg';

const Container = styled.div`
  width: 100%;
`

const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 130px;
`;

const Section = styled.div`
  color: #fff;
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
`

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
`

export {Container, Wrapper, Section, Link, LogoWrapper, Logo, Name};