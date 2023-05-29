import React from "react";

function LoanRequests(){
  const showAlert = (message) => {
    alert(message);
  };
    const cardRequests=[
        { id: 1, name: "John Doe", requestDate: "2023-05-26", amount:2000 },
        { id: 2, name: "Jane Smith", requestDate: "2023-05-27", amount:2000  },
        { id: 1, name: "John Doe", requestDate: "2023-05-26", amount:2000 },
        { id: 2, name: "Jane Smith", requestDate: "2023-05-27", amount:2000  },
        { id: 1, name: "John Doe", requestDate: "2023-05-26", amount:2000 },
        { id: 2, name: "Jane Smith", requestDate: "2023-05-27", amount:2000  },
        { id: 1, name: "John Doe", requestDate: "2023-05-26", amount:2000 },
        { id: 2, name: "Jane Smith", requestDate: "2023-05-27", amount:2000  },
        { id: 1, name: "John Doe", requestDate: "2023-05-26", amount:2000 },
        { id: 2, name: "Jane Smith", requestDate: "2023-05-27", amount:2000  },
        { id: 1, name: "John Doe", requestDate: "2023-05-26", amount:2000 },
        { id: 2, name: "Jane Smith", requestDate: "2023-05-27", amount:2000  },
        { id: 1, name: "John Doe", requestDate: "2023-05-26", amount:2000 },
        { id: 2, name: "Jane Smith", requestDate: "2023-05-27", amount:2000  },
        
        ]
    
    return(
        <div className="loan-requests">
             <table className="card-table">
      <thead >
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Request Date</th>
          <th>Amount</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {cardRequests.map((request) => (
          <tr key={request.id}>
            <td>{request.id}</td>
            <td>{request.name}</td>
            <td>{request.requestDate}</td>
            <td>{request.amount}</td>
            <td>
              <button onClick={()=>showAlert("approved")} >Approve </button>
              <button onClick={()=>showAlert("rejected")}>Reject</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
        </div>
    );
}
export default LoanRequests;