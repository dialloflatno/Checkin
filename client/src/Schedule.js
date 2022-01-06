// Schedule Page
import { useState, useEffect } from "react";
import React from "react";
import ScheduleSheet from "./ScheduleSheet";

function Schedule() {
    const [schedules, setSchedule] = useState([]);
    const schedule = "/schedules";
  
    useEffect(() => {
      fetch(schedule)
        .then((res) => res.json())
        .then((data) => setSchedule(data));
    }, []);


    const sheet = schedules.map((p) => {
      return (
        <ScheduleSheet
          key={p.id}
          student = {p.student_id.name}
          period_id={p.period_id}
          period_second ={p.period_second}
          period_thrid={p.period_thrid}
          period_fourth={p.period_fourth}
          period_fifth={p.period_fifth}

        />
      );
    });
    return (
        <div>
           {sheet}
        </div>
    );
  }
  
  export default Schedule;