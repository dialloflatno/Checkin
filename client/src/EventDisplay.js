//Works like the Card.js
import "./App.css";
import EventsList from "./EventsList";


function EventDisplay({ eventLists, handleEventDelete }) {
  const eventDrawn = eventLists.map((e) => {
    return (
      <EventsList
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

  return <div className="eigth">{eventDrawn}</div>;
}

export default EventDisplay;

