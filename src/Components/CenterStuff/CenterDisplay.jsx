import React from "react";
import rain from "../../assets/weatherlogos/rainy.png";
import MinimalTemperature from "./MinimalTemperature";
import Wrp from "./Wrp";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CurrentWeatherImage = styled.img`
  height: 100px;
  width: 100px;
`;

const CenterDisplay = () => {
  return (
    <Wrapper>
      <CurrentWeatherImage src={rain} alt="img of weather" />
      <MinimalTemperature />
      <Wrp />
    </Wrapper>
  );
};

export default CenterDisplay;
