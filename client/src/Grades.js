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
        // student={e.student}
        subject={e.subject}
        grade={e.grade}
        comment={e.comment}
        teacher={e.teacher.user.full_name}
      />
    );
  });
  return (
    <div className="gradesbox">
      <div className="gradescontainer">
        <div className="gradestitlecontainer">
          <div className="gradestitle">
            <h1>Grades</h1>
            <h3>Spring 2022</h3>
          </div>
        </div>
        <div className="mappedgrades">
          {mappedGrades}
          <br></br>
          <img src="mascot.png" alt="checkedin mascot" className="mascot" />
        </div>
      </div>
    </div>
  );
}

export default Grades;
