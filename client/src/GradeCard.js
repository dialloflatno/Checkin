function GradeCard({ subject, grade, comment, teacher }) {
  return (
    <div>
          <div className="gradecards">
      <span>Class:{subject}</span>
      <span>Grade: {grade}</span>
      <span> Comment: {comment}</span>
      <span>Teacher: {teacher}</span>
      <hr/>
    </div>
    <hr/>
    </div>

  );
}
export default GradeCard;
