import React from "react";

const Students = ({ name, age, grade }) => {
  const onClickName = () => {
    alert(`이름: ${name} | 나이 : ${age} | 점수 : ${grade} `);
  };
  return (
    <>
      <li>
        <p style={{ cursor: "pointer" }} onClick={onClickName}>
          이름 : {name}
        </p>
        <p>나이 : {age}</p>
        <p>점수 : {grade}</p>
      </li>
    </>
  );
};

export default Students;
