import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import LocationText from "./TopStuff/LocationText";
import CenterDisplay from "./CenterStuff/CenterDisplay";
import DailyPanel from "./BottomStuff/DailyPanel";

const WeatherPanel = () => {
  const [post, setPost] = useState();

  useEffect(() => {
    console.log("component mounted");

    navigator.geolocation.getCurrentPosition(function (position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      // Make API call here
      axios
        .get(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,apparent_temperature,rain,showers,snowfall&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,precipitation_sum,rain_sum,showers_sum,snowfall_sum,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant&timezone=America%2FNew_York`
        )
        .then((response) => {
          console.log(response.data);
          setPost(response.data);
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    });
  }, []);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="full-panel">
      <div className="first-panel"></div>
      <LocationText data={post} />
      <div className="second-panel"></div>
      <CenterDisplay data={post} />
      <div className="third-panel"></div>
      <DailyPanel data={post} />
    </div>
  );
};

export default WeatherPanel;
