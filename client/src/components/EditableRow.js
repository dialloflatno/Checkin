import React from "react";

const EditableRow = ({ editFormData, handleEditFormChange, e }) => {
  return (
    <tr>
      <td>
        <td>{e.emergency}</td>
      </td>
      <td>
        <td>{e.location.name}</td>
      </td>
      <td>
        <td>{e.student.student_school_id}</td>{" "}
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter your actions..."
          name="action"
          value={editFormData.action}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit">save</button>
      </td>
    </tr>
  );
};

export default EditableRow;
