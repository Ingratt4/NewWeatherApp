/* eslint-disable react/prop-types */
import sunriseimg from "../../assets/weatherlogos/sunrise.gif";
import sunsetimg from "../../assets/weatherlogos/night.gif";
import React from "react";
import styled from "styled-components";

const Title = styled.h3`
  text-align: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 900px;
`;

const Sunrise = styled.h2``;

const Sunset = styled.h2``;

const Logo = styled.img`
  width: 50px;
  height: 50px;
`;

const LocationText = ({ data }) => {
  const sunrise = data.daily.sunrise[0];
  const sunset = data.daily.sunset[0];

  return (
    <Wrapper>
      <Sunrise>
        <Logo src={sunriseimg} alt="sunset" />
        {sunrise.slice(11)}
      </Sunrise>
      <Title>Right now in ??? its ???</Title>
      <Sunset>
        {sunset.slice(11)}
        <Logo src={sunsetimg} alt="sunrise" />
      </Sunset>
    </Wrapper>
  );
};

export default LocationText;
