import React from 'react'
import styled from 'styled-components'


const Button = styled.button`
  position: center;
  height: 4rem;
  width: 4rem;
  background-image: url(${props => props.icon});
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: auto;
  border: 0px;
`

export default Button