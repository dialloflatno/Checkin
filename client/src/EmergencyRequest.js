import { useEffect, useState } from "react";
import EQuest from "./EQuest";

export default function EmergencyRequest({
  emergencyShow,
  setEmergencyRequests,
}) {
  useEffect(() => {
    fetch("/errs").then((r) => {
      if (r.ok) {
        r.json().then((studentErrs) => {
          console.log(studentErrs);
          setEmergencyRequests(studentErrs);
        });
      }
    });
  }, []);

  let columnErrs = "No Emergencies";

  if (emergencyShow.length) {
    columnErrs = emergencyShow?.map((student) => (
      <EQuest
        emerg={student.emergency}
        location={student.location.name}
        studentID={student.student.student_school_id}
      />
    ));
  }

  return (
    <div id="teacher-err-body">
      <table>
        <thead>
          <tr>
            <th>Emergency</th>
            <th>Location</th>
            <th>Student ID#</th>
          </tr>
        </thead>
        <tbody>
          {emergencyShow?.map((e) => (
            <tr>
              <td>{e.emergency}</td>
              <td>{e.location.name}</td>
              <td>{e.student.student_school_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
