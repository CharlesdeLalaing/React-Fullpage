import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

import TypeWritter from './components/BIO/typeWritter'
import styled from 'styled-components';


import LogoWhite from './img/logoHectorWhite.png'

const StyledBtn = styled.button`
  padding: 0.5em 1em;
  border: none;
  color: white;
  background-color: transparent;
  font-size: 25px;
  cursor: pointer;
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
    <img src={LogoWhite} width='180px' height='180px' style={{padding: "3em"}}></img>
    <ul class="actions" style={{ 
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
      backgroundColor: "indigo",
      width: "100%",
      opacity: 0.7,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    Copyright {new Date().getFullYear()}
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
                style={{background: "orange"}}
              >
                <p>
                  <div className="slide"> Slide 1 </div>
                  <div className="slide"> Slide 2 </div>
                  <div className="slide"> Slide 3 </div>
                  <div className="slide"> Slide 4 </div>
                </p>
              </div>
              <div
                className="section"
                data-anchor="section3"
                style={{background: "orange"}}
              >
                <p>Section 3</p>
                <p>Section 3</p>
                <p>Section 3</p>
                <p>Section 3</p>
                <p>Section 3</p>
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
