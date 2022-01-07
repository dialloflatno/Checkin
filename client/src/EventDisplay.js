//Works like the Card.js
import "./App.css";
import EventsList from "./EventsList";


function EventDisplay({ eventLists, handleEventDelete }) {
  const eventDrawn = eventLists.map((e) => {
    return (
      <EventsList
        event = {e}
        key={e.id}
        title={e.title}
        location={e.location.name}
        time={e.time}
        date={e.date}
        planner={e.planner}
        handleEventDelete={handleEventDelete}
      />
    );
  });

  return <div className ='list-content'>
  <div className="eigth">
    <div className="eventslist">
      {eventDrawn}
    </div>
    <footer></footer>
  </div>
  </div>;
}

export default EventDisplay;

