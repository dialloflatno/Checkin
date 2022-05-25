import { useEffect, useState } from "react"
import StudentUser from './StudentUser'
import TeacherUser from './TeacherUser'
import User from "./User"




export default function Admin() {

  const [allUsers, setAllUsers] = useState('')
  const [teacher,setAsTeacher] = useState('')
  const [student,setAsStudent] = useState(false)

  useEffect(() => {
    fetch('/users').then((r) => {
      if (r.ok) {
        r.json().then((everyUser) => setAllUsers(everyUser))
      }
    })
  }, [])
  // debugger
  console.log(allUsers);


function handleClickStudent(e) {
  console.log('student');
  setAsStudent((student) => !student)
  fetch(`/users/${allUsers?.map((users) => (users.id))}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      student: student,
    }),
  })
    .then((r) => r.json())
    .then((data) => {
      setAsTeacher(() => (!data));
    });
}

function handleClickTeacher(e) {
  console.log('teacher');
  setAsTeacher((e) => true)

}



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
          <td><button onClick= {handleClickStudent}>Student</button> <button onClick= {handleClickTeacher} >Teacher</button></td>
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