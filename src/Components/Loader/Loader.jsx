import React from "react";

const Loader = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-screen w-full py-20">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-[#3b82f6]"></div>
      </div>
    </div>
  );
};

export default Loader;
