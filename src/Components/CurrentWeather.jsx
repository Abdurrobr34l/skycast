import React from "react";
import { useWeatherContext } from "../context/WeatherContext";
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

const formatDate = () => {
  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  return new Date().toLocaleDateString(undefined, options);
};

const CurrentWeather = () => {
  const { weatherData, loading, selectedCity } = useWeatherContext();

  if (loading) return <div>Loading...</div>;
  if (!weatherData[selectedCity]) return <div>No data for "{selectedCity}"</div>;

  const current = weatherData[selectedCity].current;

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
      {/* Current Weather */}
      <div className="flex flex-col gap-8 xl:flex-row">
        <div className="glassMorphism relative flex-1 !p-6 !pt-12 text-white">
          <div className="flex items-center justify-between">
            <h1 className="relative text-xl font-bold md:text-5xl">
              {selectedCity}
              <span className="absolute">{getWeatherIcon(current.description)}</span>
            </h1>
            <div>
              <h2 className="text-xl font-semibold text-[#3b82f6] md:text-5xl">{current.temp}°C</h2>
              <p className="text-white/70">{current.description}</p>
            </div>
          </div>

          <span className="absolute top-0 pt-2 text-[#3b82f6]">{formatDate()}</span>

          <div className="grid grid-cols-1 gap-4 mt-10 md:grid-cols-2">
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

        <div className="flex-1 flex flex-col gap-10">
          <div className="glassMorphism !p-6 text-white">
            <HourlyForecast hourly={weatherData[selectedCity].hourly} />
          </div>
        </div>
      </div>

      <div className="glassMorphism text-white">
        <DailyForecast daily={weatherData[selectedCity].daily} />
      </div>
    </section>
  );
};

export default CurrentWeather;
