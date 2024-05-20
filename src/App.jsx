import { useState } from "react";
import Students from "./components/Students";

function App() {
  const students = [
    { name: "Alice", age: 17, grade: "A" },
    { name: "Bob", age: 18, grade: "B" },
    { name: "Charlie", age: 16, grade: "C" },
    { name: "Diana", age: 19, grade: "D" },
    { name: "Elmo", age: 20, grade: "E" },
    { name: "Fiona", age: 21, grade: "F" },
    { name: "Gabe", age: 22, grade: "A" },
    { name: "Hannah", age: 23, grade: "B" },
    { name: "Irene", age: 24, grade: "C" },
    { name: "Jenny", age: 25, grade: "D" },
    { name: "Kevin", age: 26, grade: "E" },
    { name: "Linda", age: 27, grade: "F" },
  ];

  const [minAge, setMinAge] = useState(18);
  const [input, setInput] = useState(0);

  // TODO: filter를 사용하여 minAge 이상의 학생들만 선택하세요.
  const filteredStudents = students.filter(
    (student) => student.age > minAge
  );

  const oninputChange = (e) => {
    setInput(e.target.value);
  };

  const filteredInputAge = students.filter(
    (student) => Number(student.age) >= Number(input)
  );

  return (
    <div>
      {input}
      <h1>학생 목록</h1>
      다음 나이 이상의 학생목록만 출력해요 :{" "}
      {/* TODO: input에 입력된 값(숫자) 이상의 나이를 가진 학생들만 출력하세요. */}
      <input type="number" value={input} onChange={oninputChange} />{" "}
      살 이상
      <ul>
        {/* TODO: map을 사용하여 필터링된 학생들의 정보를 표시하세요. 동명이인은 없다고 가정합니다. ex) 홍길동 - Age: 24, Grade: A */}

        {filteredInputAge.map((student) => (
          <Students key={student.name} {...student} />
        ))}
      </ul>
    </div>
  );
}

export default App;
