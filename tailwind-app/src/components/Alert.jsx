/* eslint-disable no-unused-vars */
import React from "react";

const Alert = () => {
  return (
    <div className="p-8 bg-white-200 rounded-lg">
      <button className="text-white bg-blue-500 px-4 py-2 rounded-md">Button one</button>
      <div className="mt-4 p-4 bg-red-100 rounded-md border border-red-500">
        <strong className="text-red-700">Alert!</strong>
        <span className="text-black">This is awesome!</span>
      </div>
    </div>
  );
};

export default Alert;
