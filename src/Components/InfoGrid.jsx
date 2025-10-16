import React from "react";

const InfoGrid = ({ current }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mt-4">
      <div className="glassMorphism p-3 rounded-lg">
        <p className="font-semibold text-white">Feels Like</p>
        <p className="text-white">{current.feels_like ?? current.temp}°C</p>
      </div>
      <div className="glassMorphism p-3 rounded-lg">
        <p className="font-semibold text-white">Humidity</p>
        <p className="text-white">{current.humidity}%</p>
      </div>
      <div className="glassMorphism p-3 rounded-lg">
        <p className="font-semibold text-white">Wind</p>
        <p className="text-white">{current.wind_speed} km/h</p>
      </div>
      <div className="glassMorphism p-3 rounded-lg">
        <p className="font-semibold text-white">Precipitation</p>
        <p className="text-white">{current.precipitation ?? 0} mm</p>
      </div>
    </div>
  );
};

export default InfoGrid;
