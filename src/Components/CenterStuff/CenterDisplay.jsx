/* eslint-disable react/prop-types */
import React from "react";
import rain from "../../assets/weatherlogos/rainy.png";
import MinimalTemperature from "./MinimalTemperature";
import Wrp from "./Wrp";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > * {
    margin-left: auto;
  }
`;

const CurrentWeatherImage = styled.img`
  height: 100px;
  width: 100px;
`;

const CenterDisplay = ({ data }) => {
  const current_temp = data.hourly.apparent_temperature[0];

  return (
    <Wrapper>
      <CurrentWeatherImage src={rain} alt="img of weather" />
      <MinimalTemperature temp={current_temp} />
      <Wrp />
    </Wrapper>
  );
};

export default CenterDisplay;
