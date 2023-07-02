/* eslint-disable react/prop-types */

import React from "react";
import wind from "../../assets/weatherlogos/wind.png";
import umbrella from "../../assets/weatherlogos/umbrella.png";
import humidity from "../../assets/weatherlogos/humidity.png";
import styled from "styled-components";

const Logo = styled.img`
  height: px;
  width: 20px;
`;

const ItemContainer = styled.ul`
  text-decoration: none;
  list-style: none;
  list-style-position: inside;

  li {
    margin-left: -2em;
  }
`;

const Container = styled.div``;

const IconInfo = (props) => {
  return (
    <Container>
      <ItemContainer>
        <li>
          <Logo src={wind} alt="wind img" />
          <p>{props.windspeed} km/h</p>
        </li>
        <li>
          <Logo src={umbrella} alt="rain img" />
          <p>{props.rainchance}%</p>
        </li>
        <li>
          <Logo src={humidity} alt="precipitation img" />
          <p>{props.humidity}%</p>
        </li>
      </ItemContainer>
    </Container>
  );
};

export default IconInfo;
