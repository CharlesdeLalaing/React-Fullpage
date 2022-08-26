import React from "react";
import styled from "styled-components";
import { Marginer } from "../marginer";

const DetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* padding: 2.5em 6px 0 6px; */
  line-height: 1.4;
`;

const MediumText = styled.span`
  font-size: 10px;
  color: #fff;
  font-weight: 800;
  text-transform: uppercase;
  text-align: left;
`;

const SmallText = styled.span`
    font-size: 12px;
    color: #fff;
    text-align: start;
    font-weight: bold;
    text-transform: uppercase;
`;

const SpacedHorizontalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SpacedHorizontalContainer2 = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
  text-align: left;
`;

const SpacedHorizontalContainer3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  text-align: left;
  align-items: center;
`;

const BuyButton = styled.button`
  padding: 10px 16px;
  background-color: #fbbe01;
  color: #000;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  border: 3px solid transparent;
  outline: none;
  cursor: pointer;
  transition: all 290ms ease-in-out;
  border-radius: 8px;
  &:hover {
    background-color: transparent;
    color: #fff;
    border: 3px solid #fbbe01;
  }
`;

const ColorBar = styled.div`
  width: 80%;
  height: 5px;
  border-radius: 25px;
  background-color: #FFA500;
`;

const TitleSection = styled.div`
  width: 100%;
  align-items: center;
  margin-bottom: 1em ;
  display: flex;
  justify-content: around;
`;

function ShoesDetails(props) {
  return (
    <DetailsContainer>
      <TitleSection>
      <SmallText>PROJECT NAME</SmallText><ColorBar/>
      </TitleSection>
      <SpacedHorizontalContainer>
        <MediumText>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</MediumText>
      </SpacedHorizontalContainer>
      <Marginer direction="vertical" margin="1.2em" />
      <SpacedHorizontalContainer2>
        <SpacedHorizontalContainer3>
          <MediumText>August 2022</MediumText>
          <MediumText>New York, United States</MediumText>
        </SpacedHorizontalContainer3>
        <BuyButton>BUY</BuyButton>
      </SpacedHorizontalContainer2>
    </DetailsContainer>
  );
}

export default ShoesDetails;
