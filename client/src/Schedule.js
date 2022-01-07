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
        // period_second ={p.period_second}
        // period_thrid={p.period_thrid}
        // period_fourth={p.period_fourth}
        // period_fifth={p.period_fifth}
      />
    );
  });
  return (
    <div className="schedulebackground">
      <div className="schedulebox">
        {sheet}
        <img src="mascot.png" alt="checkedin mascot" className="mascot" />
      </div>
    </div>
  );
}

export default Schedule;
