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
        student={e.student_id}
        grade={e.grade}
        comment={e.comment}
        teacher={e.teacher_id}
      />
    );
  });
  return <div>{mappedGrades}</div>;
}

export default Grades;
