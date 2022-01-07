//Displays the Events on the Page

function EventsList({event, handleEventDelete, title, location, time, date, planner}) {


function handleDeleteClick() {

  fetch(`/events/${event.id}`, {
    method: 'DELETE'
  })
    .then(() => handleEventDelete(event));
}

{
  return (

    <div className="eventslist">
        <hr className ='vr'/>
      <div className ='column'>
      <span className='title'>{date}</span>
      <span  className='date' >{title}</span>
      <span>{location}</span>
      <span>{time}</span>
      <br/>
      <span>{planner}</span>
      <br/>
      <button className="canceled" name="Delete" onClick={handleDeleteClick}> X
      </button>
    </div>
    </div>
  );
}
}

export default EventsList;
