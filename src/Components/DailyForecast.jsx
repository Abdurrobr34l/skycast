import React from "react";

const DailyForecast = ({ daily }) => {
  return (
    <div className="w-full">
      <h2 className="text-white text-xl font-semibold">7-Day Forecast</h2>
      
      <div className="flex gap-4 overflow-x-auto p-2">
        {daily.map((day, idx) => (
          <div
            key={idx}
            className="glassMorphism flex-shrink-0 flex flex-col items-center justify-center p-4 mb-3 min-w-[250px] rounded-md"
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
