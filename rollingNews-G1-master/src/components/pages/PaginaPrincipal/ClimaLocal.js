import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";

const ClimaLocal = () => {
  const [icon, setIcon] = useState("");
  const [description, setDescription] = useState("");
  const [temperature, setTemperature] = useState("");
  const [error, setError] = useState(false);
  const datos = {
    ciudad: "San Miguel de Tucuman",
    pais: "AR",
  };

  let getWeatherIcon = async (climate) => {
    let icon = await climate.weather[0].icon;
    let description = await climate.weather[0].description;
    let temperature = Math.floor(climate.main.temp);

    setIcon(icon);
    setDescription(description);
    setTemperature(temperature);
  };

  let getWeather = async () => {
    const apiKey = "5f87bfcc54a9a5edbfcfd70e3e88febf";
    const apiCall = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${datos.ciudad},${datos.pais}&units=metric&APPID=${apiKey}&lang=es`
    );
    const response = await apiCall.json();

    try {
      if (response.cod === 200) {
        setError(false);
        getWeatherIcon(response);
      } else {
        setError(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeather(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {!error ? (
        <div className="d-flex flex-row justify-content-center align-items-center align-items-md-start">
          <Image
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            fluid
            style={{ width: "18%", height: "auto" }}
          />
          <p className="fw-bold">
            {temperature}°, {"  "}
            {description}
          </p>
        </div>
      ) : null}
    </>
  );
};

export default ClimaLocal;
