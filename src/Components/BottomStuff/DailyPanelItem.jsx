/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

const Temp = styled.h5`
  font-size: 20px;
`;

const DailyPanelItem = (props) => {
  return (
    <div>
      <div>
        <img src={props.weatherimage} alt="image of weather" />
      </div>
      <div>
        <Temp>
          {props.high}° / {props.low}°
        </Temp>
      </div>
      <div>
        <p>{props.day}</p>
      </div>
    </div>
  );
};

export default DailyPanelItem;
