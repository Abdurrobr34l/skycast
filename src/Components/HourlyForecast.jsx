import React from "react";

const HourlyForecast = ({ hourly }) => {
  return (
    <div className="w-full max-w-md mb-6">
      <h2 className="text-white text-xl font-semibold mb-2">Hourly Forecast</h2>
      <div className="flex overflow-x-auto gap-4 p-2 w-[140%]">
        {hourly.map((hour, idx) => (
          <div
            key={idx}
            className="glassMorphism flex flex-col items-center justify-center min-w-[100px] p-2 rounded-md"
          >
            <span className="text-white">{hour.time}</span>
            <span className="text-2xl">{hour.icon}</span>
            <span className="text-white font-semibold">{hour.temp}°</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;
