import React, { useRef } from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

//https://api.open-meteo.com/v1/forecast?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&hourly=temperature_2m,apparent_temperature,rain,showers,snowfall&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,precipitation_sum,rain_sum,showers_sum,snowfall_sum,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant&timezone=America%2FNew_York

const WeatherData = () => {

  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [post, setPost] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    console.log("Latitude is:", lat)
    console.log("Longitude is:", long)
    console.log("Post data contains: ",post);
  },[] );

  useEffect(() => {
  axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,apparent_temperature,rain,showers,snowfall&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,precipitation_sum,rain_sum,showers_sum,snowfall_sum,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant&timezone=America%2FNew_York`)
  .then(response => {
    setPost(response.data);
    
  })
},[]);
  

 const todays_apparent_max = post.daily.apparent_temperature_max[0]; //what it feels like
 const todays_temperature_max = post.daily.temperature_2m_max[0];


  return (
    <div>
    <h1>{todays_apparent_max}</h1>
    <h2>{todays_temperature_max}</h2>

     
    </div>
  );
};

export default WeatherData;
