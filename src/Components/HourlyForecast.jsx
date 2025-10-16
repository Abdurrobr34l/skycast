import React from "react";

const HourlyForecast = ({ hourly }) => {
  return (
    <div className="w-full max-w-lg 2xl:max-w-[620px]">
      <h2 className="text-white text-xl font-semibold mb-2">Hourly Forecast</h2>

      <div className="flex gap-4 overflow-x-auto p-2">
        {hourly.map((hour, idx) => (
          <div
            key={idx}
            className="glassMorphism flex-shrink-0 flex flex-col items-center justify-center mb-3 !px-8 !py-14 min-w-[150px] rounded-md"
          >
            <span className="text-xl font-medium text-white">{hour.time}</span>
            <span className="text-2xl">{hour.icon}</span>
            <span className="text-xl font-semibold text-white">{hour.temp}°</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;
