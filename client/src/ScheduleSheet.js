function ScheduleSheet({ periods }) {

    const eachClass = periods.map(period => {

        return (
            <div >
                <hr className='vr' />
                <div className='column'>
                    <h3>Period#{period.id}</h3>
                    <h1>Start:<time>{period.start_time}</time>:00am End:{period.end_time}:00pm</h1>
                    <h3>Subject:{period.subject.name}</h3>
                    <h3>Room:TBA</h3>
                    <h3>Teacher:SUBSTITUTE</h3>
                    {/* <h3>Room:{period.subject.location}</h3>
    <h3>Teacher:{period.subject.teacher}</h3> */}
                </div>
            </div>
        )
    }
    )

    return (
        <div className="schedule-content">
            <div >
                <div className='row'>
                    <h1>Schedule</h1><h1>Friday.07. 2022</h1>
                </div>
                {eachClass}
                <footer/>
            </div>
        </div>
    )
}

export default ScheduleSheet;