import React from "react";
import "./explorestyles.css";
import { Link } from "react-router-dom";

function Explore() {
  return (
    <div className="container">
      
      <div className="square">
        <h1>News</h1>
        <p>Stay updated with the latest news and announcements.</p>
        <Link className="explore" to="/news">Explore</Link>
      </div>
      <div className="square">
        <h1>Loans</h1>
        <p>Discover our flexible loan options for your financial needs.</p>
        <Link className="explore" to="/loan">Explore</Link>
        </div>
      <div className="square">
        <h1>Certificates</h1>
        <p>Explore our certificate options for secure savings and investments.</p>
        <Link className="explore" to="/certificate">Explore</Link>
        </div>
      <div className="square">
        <h1>Points & Rewards</h1>
        <p>Learn about our loyalty program and exciting rewards.</p>
        <Link className="explore" to="/pointsRewards">Explore</Link>
        </div>
    </div>
  );
}

export default Explore;
