function ScheduleSheet({student,period_id,period_first,period_second,period_thrid,period_fourth,period_fifth}){


    return(
        <div>
            <h1> ${student}Schedule</h1>
            <h3>{period_first}</h3>
            <h3>{period_second}</h3>
            <h3>{period_thrid}</h3>
            <h3>{period_fourth}</h3>
            <h3>{period_fifth}</h3>
        </div>
    )
}

export default ScheduleSheet;