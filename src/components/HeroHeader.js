import React from 'react'
import styled from 'styled-components'
import device from './device'

const HeroHeader = styled.div`
  display: flex;
  position: center;
  height: 25rem;
  width: auto;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)), url(${props => props.image || 'pink' });
  
  @media only screen and ${device.mobileL} {
    background-size: contain;
  }

  `

export default HeroHeader