import { useEffect, useState } from "react"



export default function Admin() {

const [allUsers,setAllUsers ] = useState('')

useEffect(() => {
    fetch('/users').then((r) => {
      if (r.ok) {
        r.json().then((everyUser) => setAllUsers(everyUser))
      }
    })
  }, [])

  console.log(allUsers);

    return (
        <>
            

        </>

    )


}