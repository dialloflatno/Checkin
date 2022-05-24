import React from "react";

const ReadOnlyRow = ({ e, handleEditClick }) => {
  return (
    <tr>
      <td>{e.emergency}</td>
      <td>{e.location.name}</td>
      <td>{e.student.student_school_id}</td>
      <td>
        {/* <input></input> */}
        <button type="button" onClick={(event) => handleEditClick(event, e)}>
          edit
        </button>
        <button>cancel</button>{" "}
      </td>
      <td>
        <select>
          <option>unresolved</option>
          <option>resolved</option>{" "}
        </select>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
