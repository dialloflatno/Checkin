import { useEffect, useState } from "react";
import ReadOnlyRow from "./components/ReadOnlyRow";
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
      <h2>Active Emergencies</h2>

      <table id="active">
        <thead>
          <tr>
            <th>Emergency</th>
            <th>Location</th>
            <th>Student ID</th>
            <th>Action</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {emergencyShow?.map((e) => (
            <tr>
              <td>{e.emergency}</td>
              <td>{e.location.name}</td>
              <td>{e.student.student_school_id}</td>
              <td>
                <input></input>
                <button>save</button>
                <button>cancel</button>
              </td>
              <td>
                <select>
                  <option>unresolved</option>
                  <option>resolved</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br></br>
      <h2>Resolved Emergencies</h2>
      <table id="resolved">
        <thead>
          <tr>
            <th>Emergency</th>
            <th>Location</th>
            <th>Student ID#</th>
            <th>Action</th>
            <th>Status</th>{" "}
          </tr>
        </thead>
        <tbody>
          {emergencyShow?.map((e) => (
            <ReadOnlyRow e={e} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
