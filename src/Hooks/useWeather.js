import { useState, useEffect } from "react";

const useWeather = () => {
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/mockWeather.json")
      .then((res) => res.json())
      .then((data) => {
        setWeatherData(data.cities);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch weather data:", error);
        setLoading(false);
      });
  }, []);

  return { weatherData, loading };
};

export default useWeather;
