import { useEffect, useState } from 'react'
import EQuest from './EQuest'

export default function EmergencyRequest() {
  const [emergencyShow, setEmergencyRequests] = useState({})

  useEffect(() => {
    fetch('/errs').then((r) => {
      if (r.ok) {
        r.json().then((studentErrs) => setEmergencyRequests(studentErrs))
      }
    })
  }, [])

  let columnErrs = 'No Emergencies'

  if (emergencyShow.length) {
    columnErrs = emergencyShow?.map((student) => (
      <EQuest
        emerg={student.emergency}
        location={student.location.name}
        studentID={student.student.student_school_id}
      />
    ))
  }

  return <>{columnErrs}</>
}
