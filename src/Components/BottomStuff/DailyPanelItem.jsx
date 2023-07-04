/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

const Temp = styled.h5`
  font-size: 20px;
  font-weight: 100;
  margin-top: 10px;
  margin-bottom: 0;
  margin-right: 15px;
  margin-left: 15px;
`;
const IconImg = styled.img`
  width: 40px;
  height: 40px;
  margin: 0;
`;
const Day = styled.p`
  font-size: 11px;
  font-weight: 400;
`;

const Container = styled.div`
  margin-top: 80px;
`;
const LogoContainer = styled.div``;

const DailyPanelItem = (props) => {
  return (
    <Container>
      <LogoContainer>
        <IconImg src={props.weatherimage} alt="image of weather" />
      </LogoContainer>
      <div>
        <Temp>
          {props.high}° / {props.low}°
        </Temp>
      </div>
      <Day>
        <p>{props.day}</p>
      </Day>
    </Container>
  );
};

export default DailyPanelItem;
