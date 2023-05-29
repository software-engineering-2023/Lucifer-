import React from "react";
import Navbar from "../components/Navbar";
import "./report.css"
function Report(){
    const showAlert = (message) => {
        alert(message);
      };
    return(
        <div className="report">
            <Navbar/>
            <div className="reportissue">
                <div className="report-title">
                    Report a techincal issue
                </div>
                <div className="describe">
                    Describe your problem
                    <input type="text"className="issue" />
                    <button onClick={()=>showAlert("report submitted")} className="report-button">Report</button>
                </div>
            </div>
        </div>
    );
}
export default Report;