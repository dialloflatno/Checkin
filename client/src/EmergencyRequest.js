import { Fragment, useEffect, useState } from "react";
import EditableRow from "./components/EditableRow";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EQuest from "./EQuest";

export default function EmergencyRequest({
  emergencyShow,
  setEmergencyRequests,
}) {
  const [editFormData, setEditFormData] = useState({
    action: "",
  });
  const [editRowId, setEditRowId] = useState(null);

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

  const handleEditClick = (event, e) => {
    event.preventDefault();
    setEditRowId(e.id);

    const formValues = {
      action: e.action,
    };
    setEditFormData(formValues);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("action");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedE = {
      id: editRowId,
      action: editFormData.action,
    };

    const newEs = [...emergencyShow];

    const index = emergencyShow.findIndex((e) => e.id === editRowId);

    newEs[index] = editedE;

    setEmergencyRequests(newEs);
    setEditRowId(null);
  };

  return (
    <div id="teacher-err-body">
      <h2>Active Emergencies</h2>
      <form id="activeform">
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
              <Fragment>
                {editRowId === e.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    e={e}
                  />
                ) : (
                  <ReadOnlyRow e={e} handleEditClick={handleEditClick} />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
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
