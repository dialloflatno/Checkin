function GradeCard({ student, grade, comment, teacher }) {
  return (
    <div >
      <h2>STUDENTID#{student}</h2>
      <h3>Grade: {grade}</h3>
      <h3>Comment: {comment}</h3>
      <h3>Teacher: {teacher}</h3>
    </div>
  );
}
export default GradeCard;
