/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

const Temp = styled.h1`
  font-size: 70px;
  color: black;
  margin: 0;
`;
const Container = styled.div``;
const HighLow = styled.h4`
  margin: 0;
  font-size: 14px;
`;

const MinimalTemperature = (props) => {
  return (
    <Container>
      <Temp>{props.temp}°</Temp>
      <HighLow>
        {props.maxtemp}° / {props.mintemp}°
      </HighLow>
    </Container>
  );
};
export default MinimalTemperature;
