import React from "react";
import "./cardRequestsstyles.css"

function CardRequests(){
  const showAlert = (message) => {
    alert(message);
  };
    const cardRequests=[
        { id: 1, name: "John Doe", requestDate: "2023-05-26" },
        { id: 2, name: "Jane Smith", requestDate: "2023-05-27" },
        { id: 1, name: "John Doe", requestDate: "2023-05-26" },
        { id: 2, name: "Jane Smith", requestDate: "2023-05-27" },
        { id: 1, name: "John Doe", requestDate: "2023-05-26" },
        { id: 2, name: "Jane Smith", requestDate: "2023-05-27" },
        { id: 1, name: "John Doe", requestDate: "2023-05-26" },
        { id: 2, name: "Jane Smith", requestDate: "2023-05-27" },
        { id: 1, name: "John Doe", requestDate: "2023-05-26" },
        { id: 2, name: "Jane Smith", requestDate: "2023-05-27" },
        { id: 1, name: "John Doe", requestDate: "2023-05-26" },
        { id: 2, name: "Jane Smith", requestDate: "2023-05-27" },
        { id: 1, name: "John Doe", requestDate: "2023-05-26" },
        { id: 2, name: "Jane Smith", requestDate: "2023-05-27" },
        { id: 1, name: "John Doe", requestDate: "2023-05-26" },
        { id: 2, name: "Jane Smith", requestDate: "2023-05-27" },
        { id: 1, name: "John Doe", requestDate: "2023-05-26" },
        { id: 2, name: "Jane Smith", requestDate: "2023-05-27" },
        
    ]
    return(
        <div className="card-requests">
             <table className="card-table">
      <thead >
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Request Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {cardRequests.map((request) => (
          <tr key={request.id}>
            <td>{request.id}</td>
            <td>{request.name}</td>
            <td>{request.requestDate}</td>
            <td>
              <button onClick={()=>showAlert("Approved")} >Approve</button>
              <button onClick={()=>showAlert("rejected")}>Reject</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
        </div>
    );
}
export default CardRequests;