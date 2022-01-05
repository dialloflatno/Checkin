//Displays the Events on the Page

function EventsList({
  handleEventDelete,
  location,
  title,
  time,
  date,
  planner,
}) {
  return (
    <div className="eventslist">
      <span>Title:{title}</span>
      <span>Location:{location}</span> 
      <span>Date:{date}</span>
      <span>Time:{time}</span> 
      <span>Planner:{planner}</span>
      <button
        className="Delete"
        name="Delete"
        onClick={() => handleEventDelete(title)}
      >
        {" "}X{" "}
      </button>
    </div>
  );
}

export default EventsList;
