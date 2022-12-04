import { useState } from "react";
import { Input } from './Input';
import { credentials } from "../App";
import { Header } from "./Header";
import { Link, useNavigate } from "react-router-dom";
export function Signup() {
    const navigate = useNavigate();
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function onchange(e) {
        if (e.target.name === 'firstname') {
            setFirstname(e.target.value)

        }
        else if (e.target.name === 'lastname') {
            setLastname(e.target.value)

        }
        else if (e.target.name === 'username') {
            setUsername(e.target.value)

        }
        else if (e.target.name === 'password') {
            setPassword(e.target.value)

        }
    }
    function signup(e) {
        e.preventDefault();

        for (let i = 0; i < credentials.length; i++) {
            if (credentials[i].username === username) {
                alert('username already exist')
                return false
            }
        }
        credentials.push({ firstname, lastname, username, password });
        //alert('New user created')
        setFirstname('')
        setLastname('')
        setUsername('')
        setPassword('')
        console.log(credentials)
        navigate('/');
    }
    return (<>
        <Header element1={<></>} element2={<Link to='/'><p>Login</p></Link>} />
        <div className="signin">
            <form  className="card">
                <Input label="First Name" type="text" name='firstname' change={onchange} val={firstname} />
                <Input label="Second Name" type="text" name='lastname' change={onchange} val={lastname} />
                <Input label="UserName" type="text" name='username' change={onchange} val={username} />
                <Input label="Password" type="password" name='password' change={onchange} val={password} />
                <button onClick={signup}>Sign Up</button>
            </form>
        </div>
    </>
    );
}