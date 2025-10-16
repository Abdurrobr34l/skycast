import React, { createContext, useContext, useState } from "react";
import useWeather from "../Hooks/useWeatherContext";

// Create the context
const WeatherContext = createContext();

// Provider component
export const WeatherProvider = ({ children }) => {
  const { weatherData, loading } = useWeather();
  const [selectedCity, setSelectedCity] = useState("Dhaka"); // default city

  return (
    <WeatherContext.Provider
      value={{ weatherData, loading, selectedCity, setSelectedCity }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

// Custom hook to use context
export const useWeatherContext = () => useContext(WeatherContext);
