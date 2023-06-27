import React from "react";
import MinimalTemperature from "./MinimalTemperature";
import Wrp from "./Wrp";

const CenterDisplay = () => {
  return (
    <div>
      <img alt="img of weather" />
      <MinimalTemperature />
      <Wrp />
    </div>
  );
};

export default CenterDisplay;
