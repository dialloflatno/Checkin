//Displays the Events on the Page

function EventsList({events, handleEventDelete, title, location, time, date, planner}) {


function handleDeleteClick() {

  fetch(`/events/${events.id}`, {
    method: 'DELETE'
  })
    .then((r) => r.json())
    .then(() => handleEventDelete(events));
}



{
  return (

    <div className="eventslist">
      <div className ='column'>
      <span>Title:{title}</span>
      <span>Location:{location}</span>
      <span>Date:{date}</span>
      <span>Time:{time}</span>
      <span>Planner:{planner}</span>
      <button className="canceled" name="Delete" onClick={handleDeleteClick}> X
      </button>
    </div>
    </div>
  );
}
}

export default EventsList;
