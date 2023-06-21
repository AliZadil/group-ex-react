import React, { useRef, useState } from "react";

function Students() {
  const [students, setStudents] = useState([]);
  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const yearRef = useRef(null);

  const addStudent = () => {
    const newStudent = {
      name: nameRef.current.value,
      age: ageRef.current.value,
      year: yearRef.current.value,
    };
    setStudents((prevStudents) => [...prevStudents, newStudent]);
    nameRef.current.value = "";
    ageRef.current.value = "";
    yearRef.current.value = "";
  };

  const deleteStudent = (index) => {
    setStudents(prevStudents => prevStudents.filter((_, i) => i !== index));
  };
  

  return (
    <div>
      <h2>Students</h2>
      <form>
        <input type="text" ref={nameRef} placeholder="Name" />
        <br />
        <input type="text" ref={ageRef} placeholder="Age" />
        <br />
        <input type="text" ref={yearRef} placeholder="Year" />
        <br />
        <button type="button" onClick={addStudent}>
          Add Student
        </button>
      </form>

      <div>
        {students.map((student, i) => (
          <div key={i}>
            <p>Name: {student.name}</p>
            <p>Age: {student.age}</p>
            <p>Year: {student.year}</p>
            <button type="button" onClick={() => deleteStudent(i)}>
              Delete
            </button>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Students;
