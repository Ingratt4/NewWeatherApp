import React from "react";
import wind from "../../assets/weatherlogos/wind.png";
import umbrella from "../../assets/weatherlogos/umbrella.png";
import drop from "../../assets/weatherlogos/drop.png";
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

const Container = styled.div`
  margin: 0;
`;

const Wrp = () => {
  return (
    <Container>
      <ItemContainer>
        <li>
          <Logo src={wind} alt="wind img" />
          <p>??? km/h</p>
        </li>
        <li>
          <Logo src={umbrella} alt="rain img" />
          <p>??? %</p>
        </li>
        <li>
          <Logo src={drop} alt="precipitation img" />
          <p>??? %</p>
        </li>
      </ItemContainer>
    </Container>
  );
};

export default Wrp;
