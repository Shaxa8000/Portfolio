import React from 'react';
import Card from '../../../components/Card';
import {projects} from '../../../utils/projects';
import {Container} from './style';

const All = () => {
  return (
    <Container>
      {
        projects.map(value => {
            return(
                <Card info={value}/>
            )
        })
      }
    </Container>
  )
}

export default All
