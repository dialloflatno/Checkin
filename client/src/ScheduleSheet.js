function ScheduleSheet({ periods, date , location}) {

    console.log(location.map(the => the.name));

    const theRooms = location.map(the => the.name)
    const eachClass = periods.map(period => {

        return (
            <div >
                <hr className='vr' />
                <div className='column'>
                    <h3>Period#{period.id}</h3>
                    <h1>Start:<time>{period.start_time}</time>:00am End:{period.end_time}:00pm</h1>
                    <h3>Subject:{period.subject.name}</h3>
                    <h3>{theRooms}</h3>
                    <h3>Teacher:Subsitute </h3>
                </div>
            </div>
        )
    })



    return (
        <div className="schedule-content">
            <div>
                <div className='row'>
                    <h1>Schedule {date}</h1>
                </div>
                {eachClass}
                <footer />
            </div>
        </div>
    )
}

export default ScheduleSheet;