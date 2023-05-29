import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import  "./login.css"; 

function Login() {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [goToRegister, setGoToRegister] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (goToRegister) {
    return <Navigate to="/register" />;
  }
  if(submitted && username ==='admin' && pass ==='admin'){
    return <Navigate to="/admin" />;
  }

  if(submitted && username ==='user' && pass ==='user'){
    return <Navigate to="/user" />;
  }

  if(submitted && username ==='banker' && pass ==='banker'){
    return <Navigate to="/banker" />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" id="username" name="username"/>
        <label htmlFor="password">Password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"/>
        <button onClick={()=> {setSubmitted(true);}} type="submit">Login</button>
      </form>
      <button onClick={() => {setGoToRegister(true);}}  >Don't have an account? Register</button>

    </div>
  );
};

export default Login;
