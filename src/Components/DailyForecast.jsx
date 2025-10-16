import React from "react";

const DailyForecast = ({ daily }) => {
  return (
    <div className="w-full max-w-md">
      <h2 className="text-white text-xl font-semibold mb-2">7-Day Forecast</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {daily.map((day, idx) => (
          <div
            key={idx}
            className="glassMorphism flex flex-col items-center p-4 rounded-md"
          >
            <span className="text-white font-medium">{day.day}</span>
            <span className="text-2xl">{day.icon}</span>
            <span className="text-white">
              {day.high}° / {day.low}°
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyForecast;
