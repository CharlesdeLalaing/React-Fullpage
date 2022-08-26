import React from 'react';
import styled from "styled-components";


//importing typewriter-effect
import Typewriter from "typewriter-effect";

import './app.css'

const TypeWritterContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
`;

const TypeWritterBack = styled.div`
    font-family: sans-serif;
    position: absolute;
    text-align: center;
    display:flex;
    justify-content:center;
    align-items:center;
    width: 100%;
    height: 100%;
    background:transparent;
`;

const TypeWritterFront = styled.div`
    font-family: sans-serif;
    position: absolute;
    font-weight:800;
    font-size:40px;
    text-align: center;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    width: 100%;
    height: 100%;
    background:transparent;
`;

const Bio = styled.div`
    color: white;
    font-size: 56px;
    justify-content: center;
    text-align: center;
`;

const BioBottom = styled.div`
    color: white;
    font-size: 42px;
    display: flex;
    justify-content:center;
    text-align: center;
`;

const Triangle = styled.div`
    position: relative;
    width: 300px;
    height: 300px;
    transform-style: preserve-3d;
    transform: rotate(-30deg);
    animation: animate 15s linear infinite;
`;


function TypeWritterBio() {

return (
    <TypeWritterContainer>
        <TypeWritterBack>
            <Triangle>
            <div className="frame">
                <div className="sides" style={{'--i': 0}}></div>
                <div className="sides" style={{ '--i': 1 }}></div>
                <div className="sides" style={{'--i': 2}}></div>
                <div className="sides" style={{'--i': 3}}></div>
            </div>
            <div className="shadow"></div>
            </Triangle>
        </TypeWritterBack>
        <TypeWritterFront>
            <Bio>My Name Is Hector</Bio>
            <BioBottom>
            I'M A &nbsp;
            <Typewriter style={{textAlign: 'center', justify: 'center', fontSize: '10px'}}
            onInit={(typewriter)=> {
            typewriter
            
            .typeString("DESIGNER")
                
            .pauseFor(1000)
            .deleteAll()
            .typeString("ARTIST")
            .pauseFor(1000)
            .deleteAll()
            .typeString("DANCER")
            .pauseFor(1000)
            .deleteAll()
            .typeString("FUTURE STAR")
            .start();
                        }}
            />
            </BioBottom>
        </TypeWritterFront>
    </TypeWritterContainer>
);
}

export default TypeWritterBio;
