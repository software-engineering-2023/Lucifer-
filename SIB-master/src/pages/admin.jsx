import React from "react";
import "./adminstyles.css"
import { Link } from "react-router-dom";

function Admin() {
  const showAlert = (message) => {
    alert(message);
  };
  return (
    <body className="boody">
      <div class="search-container">
    <input type="text" class="search-bar" placeholder="Enter UserID">
      </input>
     <button class="search-button">Search</button>
     </div>
     <div class="status-bar">
    <div class="status-fill" ></div>
    System Stability: <span id="status-text">Stable</span>
  </div>
  <div>
  <h1 class="Welcome">Welcome Admin Mo...</h1></div>
      <div class="statistics-container">
    <div class="block">
      <div class="number">356</div>
      <span class="text">Blocked Users</span>
    </div>
    <div class="block">
      <div class="number">12,447</div>
      <span class="text">Active Users</span>

    </div>
    <div class="block">
      <div class="number">10,000</div>
      <span class="text">Non-ActiveUsers</span>
    </div>
      </div>
      <div class="footer">
    <button onClick={()=>showAlert("done")} className="dbutton">Disable Transactions(Temporary)</button>
    <Link to="/adminReports" className="button-reports">Technical Reports</Link>
  </div>
  
      </body>
      
      );
      
}
export default Admin;