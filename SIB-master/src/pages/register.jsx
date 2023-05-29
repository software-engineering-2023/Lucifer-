import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "./register.css";

function Register () {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
    }
    const [goToLogin , setGoToLogin] = useState(false);

    if(goToLogin){
        return <Navigate to="/" />;
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input  name="name"  id="name" placeholder="full Name" />
            <label htmlFor="email">username</label>
            <input  type="username" placeholder="username" id="username" name="username" />
            <label htmlFor="password">password</label>
            <input type="password" placeholder="********" id="password" name="password" />
            <button onClick={() => {setGoToLogin(true);}} type="submit">Register</button>
        </form>
        <button onClick={() => {setGoToLogin(true);}}>Already have an account? Login here.</button>
    </div>
    )
}
export default Register;