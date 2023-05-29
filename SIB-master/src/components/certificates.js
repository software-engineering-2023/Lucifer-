import React from "react";
import "./certificatesstyles.css";
import { useState } from "react";
import { Modal } from "./cerModal";

function Certificates() {
    const [openModal, setOpenModal] = useState(false);
    return(
        <div className="Certificates">
            <div className="Certificatess">
                <div className="cerTitle">
                    <h1>Certificate 3 years</h1>
                </div>
                <div className="info">
                    <h2>Duration: <p1>3</p1> years </h2>
                    <h2>Minimum Amount: <p1>1000</p1>EGP</h2>
                    <h2>Interest Rate: <p1>19%</p1> Monthly</h2>
                </div>
                <button className="apply" onClick={()=>{setOpenModal(true);}}>Apply now</button>
            </div>
            <div className="Certificatess">
                <div className="cerTitle">
                    <h1>Certificate step down</h1>
                </div>
                <div className="info">
                    <h2>Duration: <p1>3</p1> years </h2>
                    <h2>Minimum Amount: <p1>1000</p1>EGP</h2>
                    <h2>Interest Rate: <p1>22%</p1>1st Year <p1>18%</p1>2nd Year <p1>16%</p1>3rd Year</h2>
                </div>
                <button className="apply" onClick={()=>{setOpenModal(true);}}>Apply now</button>
            </div>
            <div className="Certificatess">
                <div className="cerTitle">
                    <h1>Certificate 1 year</h1>
                </div>
                <div className="info">
                    <h2>Duration: <p1>1</p1> year </h2>
                    <h2>Minimum Amount: <p1>1000</p1>EGP</h2>
                    <h2>Interest Rate: <p1>16%</p1> Monthly</h2>
                </div>
                <button className="apply" onClick={()=>{setOpenModal(true);}}>Apply now</button>
            </div>
            {openModal && <Modal openModal={openModal} setOpenModal={setOpenModal} />}
        </div>
    );
}   
export default Certificates;