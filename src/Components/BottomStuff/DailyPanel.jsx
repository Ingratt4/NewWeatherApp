/* eslint-disable react/prop-types */
import React, { useState } from "react";
import DailyPanelItem from "./DailyPanelItem";
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
  flex-direction: row;
  width: 700px;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
`;
const DailyPanel = ({ data }) => {
  const code = data.daily.weathercode;
  const weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const today = new Date().getDay();
  const dayIndex2 = (today + 2) % 7;
  const dayIndex3 = (today + 3) % 7;
  const dayIndex4 = (today + 4) % 7;
  const high1 = data.daily.apparent_temperature_max[1];
  const high2 = data.daily.apparent_temperature_max[2];
  const high3 = data.daily.apparent_temperature_max[3];
  const high4 = data.daily.apparent_temperature_max[4];
  const low1 = data.daily.apparent_temperature_min[1];
  const low2 = data.daily.apparent_temperature_min[2];
  const low3 = data.daily.apparent_temperature_min[3];
  const low4 = data.daily.apparent_temperature_min[4];

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
      return storm;
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
      <DailyPanelItem
        high={high1}
        low={low1}
        day="TOM"
        weatherimage={weatherImageHandler(1)}
      />
      <DailyPanelItem
        high={high2}
        low={low2}
        day={weekdays[dayIndex2]}
        weatherimage={weatherImageHandler(2)}
      />
      <DailyPanelItem
        high={high3}
        low={low3}
        day={weekdays[dayIndex3]}
        weatherimage={weatherImageHandler(3)}
      />
      <DailyPanelItem
        high={high4}
        low={low4}
        day={weekdays[dayIndex4]}
        weatherimage={weatherImageHandler(4)}
      />
    </Wrapper>
  );
};

export default DailyPanel;
