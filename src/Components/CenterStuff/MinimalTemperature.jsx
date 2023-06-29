import React from "react";
import styled from "styled-components";

const Temp = styled.h1`
  font-size: 70px;
  margin: 0;
`;
const Container = styled.div``;
const HighLow = styled.h4`
  margin: 0;
  font-size: 10px;
`;

const MinimalTemperature = () => {
  return (
    <Container>
      <Temp>30°</Temp>
      <HighLow>high/low</HighLow>
    </Container>
  );
};
export default MinimalTemperature;
