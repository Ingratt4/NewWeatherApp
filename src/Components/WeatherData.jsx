import React from "react";
import axios from "axios";
import { useState } from "react";

const WeatherData = () => {
  const [post, setPost] = useState(null);
  const [coordinates, setCoordinates] = useState({
    longitude: "",
    latitude: "",
  });

  const submitHandler = async (event) => {
    event.preventDefault();
    const baseUrl = `https://api.open-meteo.com/v1/forecast?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&hourly=temperature_2m,apparent_temperature,rain,showers,snowfall&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,precipitation_sum,rain_sum,showers_sum,snowfall_sum,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant&timezone=America%2FNew_York`;
    const response = await axios.get(baseUrl);
    setPost(response);
  };

  const coordinateHandler = ({ target: { value, name } }) => {
    setCoordinates((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="latitude">latitude:</label>
        <input
          id="latitude"
          type="text"
          value={coordinates.latitude}
          onChange={coordinateHandler}
          name="latitude"
        />
        <label htmlFor="longitude">longitude:</label>
        <input
          id="longitude"
          type="text"
          name="longitude"
          value={coordinates.longitude}
          onChange={coordinateHandler}
        />
        <label htmlFor="timezone">timezone: </label>
        <select id="timezone" name="timezone" size="3">
          <option value="New york">New York</option>
          <option value="New york">Chicago</option>
          <option value="New york">New York</option>
          <option value="New york">New York</option>
          <option value="New york">New York</option>
          <option value="New york">New York</option>
        </select>

        <button type="submit">Submit</button>
      </form>

      <h3> </h3>
    </div>
  );
};

export default WeatherData;
