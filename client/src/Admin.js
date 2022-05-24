import { useEffect, useState } from "react"
import StudentUser from './StudentUser'
import TeacherUser from './TeacherUser'
import User from "./User"




export default function Admin() {

  const [allUsers, setAllUsers] = useState('')

  useEffect(() => {
    fetch('/users').then((r) => {
      if (r.ok) {
        r.json().then((everyUser) => setAllUsers(everyUser))
      }
    })
  }, [])
  // debugger
  console.log(allUsers);


  let columnUsers = "No Users";

  if (allUsers.length) {
    columnUsers = allUsers?.map((users) => (
      <ul>
       <li>{users. full_name} <br/> Email Address: {users.email} <br/> School:{users.school}<br/>Student ID NUMBER:{users.IDNUMBER}<br/>{users.state}<br/>{users.student}</li>
      </ul>
    )
    )
  }
  return (
    <>

      <div class='columnWork'>
        {
 columnUsers

        }

      </div>
    </>

  )


}