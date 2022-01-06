function GradeCard({ student, grade, comment, teacher }) {
  return (
    <div className="gradecards">
      <h1>{student} Grades</h1>
      <h3>{grade}</h3>
      <h3>{comment}</h3>
      <h3>{teacher}</h3>
    </div>
  );
}
export default GradeCard;
