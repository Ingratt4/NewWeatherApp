/* eslint-disable react/prop-types */
import React from "react";
import rain from "../../assets/weatherlogos/rainy.png";
import MinimalTemperature from "./MinimalTemperature";
import IconInfo from "./IconInfo";
import styled from "styled-components";
import sun from "../../assets/weatherlogos/sun.gif";
import cloudy from "../../assets/weatherlogos/clouds.gif";
import snow from "../../assets/weatherlogos/snow.png";
import snowstorm from "../../assets/weatherlogos/snowstorm.png";
import partlycloudy from "../../assets/weatherlogos/partlycloudy.gif";
import windy from "../../assets/weatherlogos/windy.png";
import drizzle from "../../assets/weatherlogos/drizzle.gif";
import fog from "../../assets/weatherlogos/foggy.gif";
import rainy from "../../assets/weatherlogos/rain.gif";
import storm from "../../assets/weatherlogos/storm.png";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 520px;
  margin-left: auto;
  margin-right: auto;

  > * {
    margin-left: auto;
  }
`;

const CurrentWeatherImage = styled.img`
  height: 170px;
  width: 170px;
  margin-left: 0;
`;

const CenterDisplay = ({ data }) => {
  const code = data.daily.weathercode;
  const current_temp = data.hourly.apparent_temperature[0];
  const wind_speed = data.daily.windspeed_10m_max[0];
  const rain_chance = data.hourly.precipitation_probability[0];
  const max_temp = data.daily.apparent_temperature_max[0];
  const min_temp = data.daily.apparent_temperature_min[0];
  const humidity = data.hourly.relativehumidity_2m[0];

  const weatherImageHandler = (index) => {
    if (
      code[index] === 61 ||
      code[index] === 63 ||
      code[index] === 65 ||
      code[index] === 80 ||
      code[index] === 81 ||
      code[index] === 82
    ) {
      return rainy;
    } else if (code[index] === 95) {
      return rainy;
    } else if (code[index] === 45 || code[index] === 48) {
      return fog;
    } else if (code[index] === 71 || code[index] === 73 || code[index] === 85) {
      return snow;
    } else if (code[index] === 75 || code[index] === 86) {
      return snowstorm;
    } else if (code[index] === 0 || code[index] === 1) {
      return sun;
    } else if (code[index] === 2 || code[index] === 3) {
      return cloudy;
    } else if (code[index] === 51 || code[index] === 53 || code[index] === 55) {
      return drizzle;
    }
  };

  return (
    <Wrapper>
      <CurrentWeatherImage src={weatherImageHandler(0)} alt="img of weather" />
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
