import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const Container = styled.div`
  width: 100%;
`

const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
`;

const Section = styled.div`
  color: #fff;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: #fff;
`

export {Container, Wrapper, Section, Link};