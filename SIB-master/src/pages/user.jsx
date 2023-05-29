import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/hero";
import Explore from "../components/explore";
import Userbar from "../components/userbar";

function User() {
  
  return (
    <div className="user">
      <Navbar />
      <Hero 
        cName="hero"
        heroImage="https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        title="Bank number 1 in the world"
        text="We deliver value for our customers and shareholders."
      />
      <Explore/>
      <Userbar/>
    </div>
  );
}

export default User;
