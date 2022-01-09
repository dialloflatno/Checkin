function GradeCard({ student, subject, grade, comment, teacher }) {
  return (
    <div className="gradecards">
      {/* <h2>STUDENTID#{student}</h2> */}
      <span>Class: {subject}</span>
      <span>Grade: {grade}</span>
      <span>Comment: {comment}</span>
      <span>Teacher: {teacher}</span>

    </div>
  );
}
export default GradeCard;
