import React from "react";

const Students = ({ name, age, grade }) => {
  return (
    <div>
      <p>
        {name} - Age: {age}, Grade: {grade}
      </p>
    </div>
  );
};

export default Students;
