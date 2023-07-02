/* eslint-disable react/prop-types */
import React from "react";
import DailyPanelItem from "./DailyPanelItem";
import styled from "styled-components";
import sun from "../../assets/weatherlogos/sun.png";
import cloudy from "../../assets/weatherlogos/cloudy.png";
import rainy from "../../assets/weatherlogos/rainy.png";
import storm from "../../assets/weatherlogos/storm.png";

const Wrapper = styled.div`
  display: flex;
`;
const DailyPanel = ({ data }) => {
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
    if (data.daily.rain_sum[index] > 1) {
      return { rainy };
    }
  };

  return (
    <Wrapper>
      <DailyPanelItem high={high1} low={low1} day="TOM" />
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
