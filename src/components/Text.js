import React from 'react'
import styled from 'styled-components'
import device from './device'


const Text = styled.h2`
  margin: ${props => props.margin || 2 }rem;
  font-size: 1.5rem;
  font-weight: 400;
  color: ${props => props.color || 'grey'};

  @media only screen and ${device.mobileL} {
    font-size: 1.8rem;
  }

`

export default Text