import { id, firstName, lastName } from "./Login";
import { Header } from "./Header";
import {  Navigate, useNavigate } from "react-router-dom";



export function Welcome(props) {
    
    const navigate = useNavigate();
    
    if (id === '')  {
        return <Navigate to="/" />
    }

    function logout() {
        navigate('/',{replace:true});
        id = '';
        firstName = '';
        lastName = '';
    }

    return (<>
        <Header element1={id} element2={<p onClick={logout}>Logout</p> }/>
        <div className="details">
        <h1>Welcome {firstName} {lastName}</h1>
        <h1>Your user id is {id}</h1>

        </div>
      
    </>
    );
}