import React, { useState, useEffect } from "react";
import GradeCard from "./GradeCard";

function Grades() {
  const [grades, setGrades] = useState([]);
  const grades_url = "/grades/";
  useEffect(() => {
    fetch(grades_url)
      .then((res) => res.json())
      .then((data) => setGrades(data));
  }, []);

  const mappedGrades = grades.map((e) => {
    return (
      <GradeCard
        key={e.id}
        student={e.student.student_school_id}
        grade={e.grade}
        comment={e.comment}
        teacher={e.teacher.user.full_name}
      />
    );
  });
  return <div>
    <h1>Grades</h1>
    {mappedGrades}
    </div>;
}

export default Grades;
