import React from "react";
import useWeather from "../Hooks/useWeather";
import {
  WiDaySunny,
  WiCloud,
  WiRain,
  WiDayCloudy,
  WiStormShowers,
  WiThermometer,
  WiStrongWind,
  WiHumidity,
} from "react-icons/wi";
import HourlyForecast from "./HourlyForecast";
import DailyForecast from "./DailyForecast";

//* Dynamic Date and Time
const formatDate = () => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date().toLocaleDateString(undefined, options);
};

const CurrentWeather = () => {
  const { weatherData, loading } = useWeather();

  if (loading) return <div>Loading...</div>;

  const city = "Dhaka";
  const current = weatherData[city].current;

  //* Conditonally showing weather related icon
  const getWeatherIcon = (description) => {
    switch (description.toLowerCase()) {
      case "sunny":
        return <WiDaySunny size={40} color="#facc15" />;
      case "cloudy":
        return <WiCloud size={40} color="#94a3b8" />;
      case "rainy":
        return <WiRain size={40} color="#3b82f6" />;
      case "partly cloudy":
      case "clouds":
        return <WiDayCloudy size={40} color="#fbbf24" />;
      case "storm":
        return <WiStormShowers size={40} color="#f87171" />;
      default:
        return <span>❓</span>;
    }
  };

  return (
    <section className="flex flex-col gap-8 mt-8">
      {/* //* Current Weather and Hourly Forecast*/}
      <div className="flex gap-8">
        {/* //? Current Weather */}
        <div className="glassMorphism relative flex-1 !p-6 !pt-12 text-white">
          {/* //? City Name, Weather Icon, Temperature and Its Description */}
          <div className="flex items-center justify-between">
            {/* //* City Name and Weather Icon */}
            <h1 className="relative text-5xl font-bold">
              {city}
              <span className="absolute">
                {getWeatherIcon(current.description)}
              </span>
            </h1>

            {/* //* Temperature and Its Description */}
            <div>
              <h2 className="text-4xl font-semibold">{current.temp}°C</h2>
              <p className="text-white/70">{current.description}</p>
            </div>
          </div>

          {/* //? Date */}
          <span className="absolute top-0 pt-2 text-[#3b82f6]">
            {formatDate()}
          </span>

          {/* //? Additional Info's */}
          <div className="grid grid-cols-2 gap-4 mt-10 md:grid-cols-2">
            <div className="glassMorphism flex items-center justify-center gap-2 p-2">
              <WiThermometer className="text-2xl text-yellow-400" />
              <div>
                <span className="!text-lg font-medium">Feels Like: </span>
                <span>{current.feels_like}°C</span>
              </div>
            </div>

            <div className="glassMorphism flex items-center justify-center gap-2 p-2">
              <WiStrongWind className="text-2xl text-blue-400" />
              <div>
                <span className="!text-lg font-medium">Wind: </span>
                <span>{current.wind_speed} km/h</span>
              </div>
            </div>

            <div className="glassMorphism flex items-center justify-center gap-2 p-2">
              <WiHumidity className="text-2xl text-blue-600" />
              <div>
                <span className="!text-lg font-medium">Humidity: </span>
                <span>{current.humidity}%</span>
              </div>
            </div>

            <div className="glassMorphism flex items-center justify-center gap-2 p-2">
              <WiRain className="text-2xl text-indigo-500" />
              <div>
                <span className="!text-lg font-medium">Precipitation: </span>
                <span>{current.precipitation} mm</span>
              </div>
            </div>
          </div>
        </div>

        {/* //? Hourly Forecast */}
        <div className="flex-1 flex flex-col gap-10">
          {/* //? Hourly Forecast */}
          <div className="glassMorphism text-white">
            <HourlyForecast hourly={weatherData[city].hourly}></HourlyForecast>
          </div>
        </div>
      </div>

      {/* //* 7-Day Forecast */}
      <div className="glassMorphism text-white">
        <DailyForecast daily={weatherData[city].daily}></DailyForecast>
      </div>
    </section>
  );
};

export default CurrentWeather;
