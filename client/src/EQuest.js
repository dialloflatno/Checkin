export default function EQuest({ emerg, location, studentID }) {
  return (
    <div id="eqstack">
      <span>Emergency: {emerg}</span>
      <br />
      <span>Room: {location}</span>
      <br />
      <span>Student#ID: {studentID}</span>
    </div>
  );
}
