import { useState } from "react";

function SignUp() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

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

    return (
        <div className="signContainer">
            <form onSubmit = {handleSubmit}>
            <h1 className='logo'>Checkedin</h1>
            <input className ='fullName' type ='text'onChange = {handleChange} placeholder ='fullName'/>
            <br/>
            <input className ='email' type ='email' onChange = {handleChange}placeholder ='email'/>
            <br/>
            <input className ='phoneNumber'type='tel' onChange = {handleChange}placeholder ='phoneNumber'/>
            <br/>
            <input className ='state' type ='text'onChange = {handleChange}placeholder ='state'/>
            <br/>
            <input className ='school' onChange = {handleChange}placeholder ='school'/>
            <br/>
            <input className ='idNumber' onChange = {handleChange}placeholder ='idNumber'/>
            <br/>
            <input className ='username' onChange = {handleChange}placeholder ='username'/>
            <br/>
            <input className ='password'onChange = {handleChange} placeholder ='password'/>
            <br/>
            <button className = 'signIn' type ='submit' >Sign Up</button>
            </form>
        </div>
        );
}

export default SignUp;
