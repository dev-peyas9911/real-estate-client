import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-64">
      <div
        className="radial-progress animate-spin text-primary"
        style={{ "--value": 70, "--size": "4rem", "--thickness": "4px" }}
      ></div>
    </div>
  );
};

export default Spinner;
