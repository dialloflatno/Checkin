export default function EQuest({ emerg, location, studentID }) {
  return (
    <div id="eqstack">
      {/* OLD VIEW OF EMERGENCIES AS CARDS */}
      {/* <span>Emergency: {emerg}</span>
      <br />
      <span>Room: {location}</span>
      <br />
      <span>Student#ID: {studentID}</span> */}

      {/* NEW VIEW OF EMERGENCIES AS A TABLE */}
      <table>
        <thead>
          <tr>
            <th>Emergency</th>
            <th>Location</th>
            <th>Student ID#</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{emerg}</td>
            <td>{location}</td>
            <td>{studentID}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
