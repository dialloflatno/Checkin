import { useState, useEffect } from "react";



export default function School() {

    const [everySchool, setAllSchools] = useState([])

    useEffect(() => {
        fetch("/schools").then((r) => {
            if (r.ok) {
                r.json().then((everySchool) => setAllSchools(everySchool));
            }
        });
    }, []);
    console.log(everySchool);


    return (
        <div class="userTable">
        <table>
                <thead>
                    <tr>
                        <th>SCHOOL</th>
                        <th>ADDRESS</th>
                    </tr>
                </thead>
                <tbody>
                    {everySchool?.map((school) =>
                        <tr>
                            <td PRIMARYKEY={school.id}>{school.name}</td>
                            <td>{school.address}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>

    )


}