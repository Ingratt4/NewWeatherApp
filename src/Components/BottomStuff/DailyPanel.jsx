import React from "react";
import DailyPanelItem from "./DailyPanelItem";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;
const DailyPanel = () => {
  return (
    <Wrapper>
      <DailyPanelItem />
      <DailyPanelItem />
      <DailyPanelItem />
      <DailyPanelItem />
    </Wrapper>
  );
};

export default DailyPanel;
