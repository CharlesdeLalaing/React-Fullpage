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
  left: -35%; 
  height: 20px;
  border-radius: 15px;
  min-width: 90%;
  background-color: #e60073;
  animation: ${glow} 2s ease-in-out infinite alternate;
  rotate: 60deg;
`;


export function GlowBar2(props) {
    return (
        <GlowBar/>
    );
}