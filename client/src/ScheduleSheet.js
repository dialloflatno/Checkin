function ScheduleSheet({periods}){

   const eachClass = periods.map(period=> {
       
        return(
    <div>
    <h3>Period#{period.id}</h3>
    <h3>Start:{period.start_time}:00am End:{period.end_time}:00pm</h3>
    <h3>Subject:{period.subject.name}</h3>
    <h3>Room:{period.subject.location}</h3>
    <h3>Teacher:{period.subject.teacher}</h3>
</div>
   )}
)


    return(
        <div>
            <h1>Schedule</h1>
            {eachClass}
        </div>
    )
}

export default ScheduleSheet;