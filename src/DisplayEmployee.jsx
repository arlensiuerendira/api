import React from "react";

const DisplayEmployee = ({ employee }) => {
  return (
    <div className="DisplayEmployee">
      <div>Quote : {employee.quote}</div>
      <div>Character : {employee.character}</div>
      <img src={employee.image} alt="simpsoncharacter" />
    </div>
  );
};

export default DisplayEmployee;
