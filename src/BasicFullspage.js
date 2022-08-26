import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import styled from 'styled-components';


import TypeWritter from './components/BIO/typeWritter';
import NikeCard from './components/PROJECTS/nikeCard/index';
import Main from './components/CONTACT/Main'


import LogoWhite from './img/logoHectorWhite.png'

const StyledBtn = styled.button`
  padding: 0.5em 1em;
  border: none;
  color: white;
  background-color: transparent;
  font-size: 25px;
  cursor: pointer;
`;

const CardBox = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 80%;
  margin: auto;
`;

const Menu = ({
  moveToSection1,
  moveToSection3,
  moveToSection4
}) => (
  <div
    className="menu"
    style={{
      position: "fixed",
      top: 0,
      zIndex: 100,
      backgroundColor: "transparent",
      display: "flex",
      alignItems: "center",
      width: "100%",
      justifyContent: "space-between"
    }}
  >
    <a href="/"><img src={LogoWhite} width='150px' height='150px' style={{padding: "1em"}}></img></a>
    <ul className="actions" style={{ 
      listStyle: "none", marginRight: "50px"
      }}>
      <li>
        <StyledBtn onClick={moveToSection1}>BIO</StyledBtn>
        <StyledBtn onClick={moveToSection4}>PROJECTS</StyledBtn>
        <StyledBtn onClick={moveToSection3}>CONTACT</StyledBtn>
        {/* <button onClick={moveToSection4}>Move to Section 4</button>
        <button onClick={moveDown}>Move Section Down</button> */}
      </li>
    </ul>
  </div>
);

const Footer = () => (
  <div
    style={{
      position: "fixed",
      bottom: 0,
      zIndex: 100,
      backgroundColor: "transparent",
      width: "100%",
      color: "white",
      display: "flex",
      padding:'1em',
      alignItems: "left",
      justifyContent: "left"
    }}
  >
    Copyright @ Hector.com 2022 by Digiiitall.com
  </div>
);

function BasicFullPage() {
  return (
    <>
      <Menu
        moveDown={() => window.fullpage_api.moveSectionDown()}
        moveToSection4={() => window.fullpage_api.moveTo("section4")}
        moveToSection3={() => window.fullpage_api.moveTo("section3")}
        moveToSection1={() => window.fullpage_api.moveTo(1)}
      />
      <ReactFullpage
        //fullpage options
        scrollingSpeed={1000} /* Options here */
        licenseKey=""
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section" style={{background: "black"}}>
                {/* <p>Section 1 (welcome to fullpage.js)</p>
                <button onClick={() => fullpageApi.moveSectionDown()}>
                  Click me to move down
                </button> */}
                <TypeWritter/>
              </div>
              <div
                className="section"
                data-anchor="section4"
                style={{background: "black"}}
              >
                  <div className="slide" >
                    <CardBox>
                    <NikeCard/>
                    <NikeCard/>
                    </CardBox>
                  </div>
                  <div className="slide" >
                    <CardBox>
                    <NikeCard/>
                    <NikeCard/>
                    </CardBox>
                  </div>
                  <div className="slide" >
                    <CardBox>
                    <NikeCard/>
                    <NikeCard/>
                    </CardBox>
                  </div>
                  <div className="slide" >
                    <CardBox>
                    <NikeCard/>
                    <NikeCard/>
                    </CardBox>
                  </div>
              </div>
              <div
                className="section"
                data-anchor="section3"
                style={{background: "black"}}
              >
              <Main/>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
      <Footer />
    </>
  );
}

export default BasicFullPage;
