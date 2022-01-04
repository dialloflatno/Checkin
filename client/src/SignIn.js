import { useState } from "react";

function SignIn() {

    const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");

    function handleSubmit (e){
        e.preventDefault();
        const user = {
            username,
            password
        }

        fetch('/login', {
            method:'POST',
            headers: { 
                "Content-Type": 'applications/json',
            },
            body: JSON.stringify({ username ,password}),
        }).then((r) => {
            if(r.ok) {
                r.json().then((user) => setUsername(user));
            }
            })  
        }
    const handleChange = (e) => {
        console.log(e.target.value)
    }
no
    return (
        <div className="signContainer">
            <form onSubmit = {handleSubmit}>
            <h1 className='logo'>Checkedin</h1>
            <input className ='username' onChange = {handleChange}placeholder ='username'/>
            <input className ='password'onChange = {handleChange} placeholder ='password'/>
            <button className = 'signIn' type ='submit' >Sign In</button>
            </form>
        </div>
        );
}

export default SignIn;