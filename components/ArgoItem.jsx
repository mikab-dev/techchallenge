import React from "react";

import ProgressBar from "./ProgressBar";

const ArgoItem = ({ argonaute }) => {
  const color = argonaute.sex === "M" ? "bg-blue-200" : "bg-pink-200";
  const itemClass = `bg-white p-6 rounded-lg shadow-lg items-center flex flex-col w-2/3 min-w-full md:min-w-0 mt-4 ${color}`;

  return (
    <div className="flex flex-col items-center mt-4 font-main-menu ">
      <div className={itemClass}>
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
          {argonaute.name}
        </h2>
        <p className="text-gray-700 mb-2 text-xs md:text-base">Navigation :</p>
        <ProgressBar bgcolor={"#5090F4"} completed={argonaute.navigation} />
      </div>
    </div>
  );
};

export default ArgoItem;
