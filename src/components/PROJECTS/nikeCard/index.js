import { motion, useMotionValue, useTransform } from "framer-motion";
import React from "react";
import styled from "styled-components";

import AirJordanImg from "../../img/favpng_designer-clothing-dress-pattern.png";
import { ShoesDetails } from "./shoeDetails";

const CardWrapper = styled.div`
  width: 100%;
  perspective: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardContainer = styled(motion.div)`
  width: 285px;
  height: 500px;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
  background-color: #1d1f21;
  color: #fff;
  position: relative;
  cursor: grab;
  box-shadow:
    inset 0 0 50px #fff,      /* inner white */
    inset 20px 0 80px #FFA500,   /* inner left magenta short */
    inset -20px 0 80px #FFA500,  /* inner right cyan short */
    inset 20px 0 300px #FFA500,  /* inner left magenta broad */
    inset -20px 0 300px #FFA500, /* inner right cyan broad */
    0 0 50px #FFA500,            /* outer white */
    -10px 0 80px #FFA500,        /* outer left magenta */
    10px 0 80px #FFA500;         /* outer right cyan */
}
`;

const CircleWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  overflow: hidden;
  border-top-right-radius: 25px;
`;

const Circle = styled.div`
  position: absolute;
  width: 350px;
  height: 350px;
  top: -4.2em;
  right: -10em;
  z-index: 5;
  background-color: #FFA500;
  opacity: 0.5;
  border-radius: 50%;
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1.2;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  padding: 1em 15px;
`;

const BottomContainer = styled.div`
  display: flex;
  flex: 0.8;
  padding: 1em 1em;
`;

const NikeText = styled.h1`
  color: #fff;
  text-transform: uppercase;
  margin: 0;
  z-index: 10;
  font-size: 55px;
  font-weight: 800;
`;

const ShoesWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`;

const Shoes = styled(motion.div)`
  width: auto;
  height: 200px;
  z-index: 99;
  user-select: none;
  margin-right: 2em;
  margin-top: 4em;
  img {
    width: auto;
    height: 100%;
    user-select: none;
  }
`;

export function NikeCard(props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <CardWrapper>
      <CardContainer
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.16}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: "grabbing" }}
      >
        <TopContainer>
          <CircleWrapper>
            <Circle />
          </CircleWrapper>
          <ShoesWrapper>
            <Shoes
              style={{ x, y, rotateX, rotateY, z: 100000 }}
              drag
              dragElastic={0.12}
              whileTap={{ cursor: "grabbing" }}
            >
              <img src={AirJordanImg} style={{ userSelect:"none" }} />
            </Shoes>
          </ShoesWrapper>
          <NikeText>CUSTOM TEXT</NikeText>
        </TopContainer>
        <BottomContainer>
          <ShoesDetails />
        </BottomContainer>
      </CardContainer>
    </CardWrapper>
  );
}