// Schedule Page
import { useState, useEffect } from "react";
import React from "react";
import ScheduleSheet from "./ScheduleSheet";

function Schedule() {
  const [schedules, setSchedule] = useState([]);
  const schedule_url = "/schedules";

  useEffect(() => {
    fetch(schedule_url)
      .then((res) => res.json())
      .then((data) => setSchedule(data));
  }, []);

  const time = new Date().toLocaleTimeString();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  const date = new Date().toLocaleDateString(undefined, options);
  console.log(schedules);


  const locationsOfrooms = schedules.map( sub => sub.subjects.map(the => the.location ))
  debugger
  const sheet = schedules.map((p) => {
    return (
      <ScheduleSheet
        key={p.id}
        student={p.student_id}
        periods={p.subjects}
        location = {p.subjects.map(the => the.location )}
      // teacher={p.periods.subject.name}
      date={date}
      />
    );

  });


  return <div className='schdule-sheet'>
    <div className="schedulebackground">
      <div className="schedulebox">
        <div className='Bigtime'>
          <time>{time}</time>
        </div>
        {sheet}
        {/* <img src="mascot.png" alt="checkedin mascot" className="mascot" /> */}
      </div>
    </div>
  </div>
    ;
}

export default Schedule;
