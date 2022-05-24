import React from "react";

const ReadOnlyRow = ({ e }) => {
  return (
    <tr>
      <td>{e.emergency}</td>
      <td>{e.location.name}</td>
      <td>{e.student.student_school_id}</td>
      <td>
        <input></input>
        <button>save</button>
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
