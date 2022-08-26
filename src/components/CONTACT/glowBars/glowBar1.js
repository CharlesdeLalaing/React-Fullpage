import React from "react";
import styled, { keyframes } from 'styled-components'

const glow = keyframes`
  100% {
  box-shadow: 0 0 3px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #e60073, 0 0 70px #e60073, 0 0 80px #e60073;
}
`

const GlowBar = styled.div`
  position: absolute; 
  overflow: hidden;
  top: 50%; 
  right: -35%; 
  height: 20px;
  border-radius: 15px;
  min-width: 90%;
  background-color: #e60073;
  /* -webkit-animation: ${glow} 1s ease-in-out infinite alternate;
  -moz-animation: ${glow} 1s ease-in-out infinite alternate; */
  animation: ${glow} 3s ease-in-out infinite alternate;
  rotate: 120deg;
`;


export function GlowBar1(props) {
    return (
        <GlowBar/>
    );
}