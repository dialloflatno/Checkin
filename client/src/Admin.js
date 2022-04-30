import { useEffect, useState } from "react"
import StudentUser from './StudentUser'
import TeacherUser from './TeacherUser'




export default function Admin() {

const [allUsers,setAllUsers ] = useState('')

useEffect(() => {
    fetch('/users').then((r) => {
      if (r.ok) {
        r.json().then((everyUser) => setAllUsers(everyUser))
      }
    })
  }, [])
debugger
  console.log(allUsers);

    return (
        <>
            <StudentUser students = { allUsers.students}/>
            <TeacherUser teachers = {allUsers.teachers}/>
            

        </>

    )


}