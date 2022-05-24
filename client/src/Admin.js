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
      <div class = 'userTabel'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>School</th>
            <th>ID NUMBER</th>
            <th>STATE</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <td>{users.full_name}</td>
          <td>{users.email}</td>
          <td>{users.school}</td>
          <td>{users.IDNUMBER}</td>
          <td>{users.state}</td>
          <td>Student <button>Status</button></td>
          {/* <td>Student <select>
            <option >STUDENT</option>
            <option>TEACHER</option>
            </select></td> */}
        </tbody>
      </table>
      </div>
      )
    )
  }
  return (
    <>

      <div class='columnWork'>
        { columnUsers }

      </div>
    </>

  )


}