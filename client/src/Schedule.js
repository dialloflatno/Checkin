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

  const sheet = schedules.map((p) => {
    return (
      <ScheduleSheet
        key={p.id}
        student={p.student_id}
        periods={p.periods}
      />
    );
  });
  return <div className='schdule-sheet'>
    <div className="schedulebackground">
      <div className="schedulebox">
        {sheet}
        {/* <img src="mascot.png" alt="checkedin mascot" className="mascot" /> */}
      </div>
      </div>
    </div>
  ;
}

export default Schedule;
