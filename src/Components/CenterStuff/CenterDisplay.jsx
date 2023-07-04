/* eslint-disable react/prop-types */
import React from "react";
import rain from "../../assets/weatherlogos/rainy.png";
import MinimalTemperature from "./MinimalTemperature";
import IconInfo from "./IconInfo";
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
  margin-left: 0;
`;

const CenterDisplay = ({ data }) => {
  const current_temp = data.hourly.apparent_temperature[0];
  const wind_speed = data.daily.windspeed_10m_max[0];
  const rain_chance = data.hourly.precipitation_probability[0];
  const max_temp = data.daily.apparent_temperature_max[0];
  const min_temp = data.daily.apparent_temperature_min[0];
  const humidity = data.hourly.relativehumidity_2m[0];
  const sunrise = data.daily.sunrise[0];
  const sunset = data.daily.sunset[0];

  return (
    <Wrapper>
      <CurrentWeatherImage src={rain} alt="img of weather" />
      <MinimalTemperature
        temp={current_temp}
        maxtemp={max_temp}
        mintemp={min_temp}
      />
      <IconInfo
        windspeed={wind_speed}
        rainchance={rain_chance}
        humidity={humidity}
      />
    </Wrapper>
  );
};

export default CenterDisplay;
