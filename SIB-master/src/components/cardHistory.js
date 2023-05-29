import React from "react";
import "../components/cardHistorystyles.css";

function CardHistory(){
    const transactions = [
        { receiver: 'John Doe', type: 'Payment', date: '2023-05-25', amount: 100 },
        { receiver: 'Jane Smith', type: 'Purchase', date: '2023-05-24', amount: 50 },
        { receiver: 'Alex Johnson', type: 'Payment', date: '2023-05-23', amount: 75 },
        { receiver: 'John Doe', type: 'Payment', date: '2023-05-25', amount: 100 },
        { receiver: 'Jane Smith', type: 'Purchase', date: '2023-05-24', amount: 50 },
        { receiver: 'Alex Johnson', type: 'Payment', date: '2023-05-23', amount: 75 },
        { receiver: 'John Doe', type: 'Payment', date: '2023-05-25', amount: 100 },
        { receiver: 'Jane Smith', type: 'Purchase', date: '2023-05-24', amount: 50 },
        { receiver: 'Alex Johnson', type: 'Payment', date: '2023-05-23', amount: 75 },
        { receiver: 'John Doe', type: 'Payment', date: '2023-05-25', amount: 100 },
        { receiver: 'Jane Smith', type: 'Purchase', date: '2023-05-24', amount: 50 },
        { receiver: 'Alex Johnson', type: 'Payment', date: '2023-05-23', amount: 75 },
        { receiver: 'John Doe', type: 'Payment', date: '2023-05-25', amount: 100 },
        { receiver: 'Jane Smith', type: 'Purchase', date: '2023-05-24', amount: 50 },
        { receiver: 'Alex Johnson', type: 'Payment', date: '2023-05-23', amount: 75 },
        { receiver: 'John Doe', type: 'Payment', date: '2023-05-25', amount: 100 },
        { receiver: 'Jane Smith', type: 'Purchase', date: '2023-05-24', amount: 50 },
        { receiver: 'Alex Johnson', type: 'Payment', date: '2023-05-23', amount: 75 },{ receiver: 'John Doe', type: 'Payment', date: '2023-05-25', amount: 100 },
        { receiver: 'Jane Smith', type: 'Purchase', date: '2023-05-24', amount: 50 },
        { receiver: 'Alex Johnson', type: 'Payment', date: '2023-05-23', amount: 75 },
        { receiver: 'John Doe', type: 'Payment', date: '2023-05-25', amount: 100 },
        { receiver: 'Jane Smith', type: 'Purchase', date: '2023-05-24', amount: 50 },
        { receiver: 'Alex Johnson', type: 'Payment', date: '2023-05-23', amount: 75 },
        { receiver: 'John Doe', type: 'Payment', date: '2023-05-25', amount: 100 },
        { receiver: 'Jane Smith', type: 'Purchase', date: '2023-05-24', amount: 50 },
        { receiver: 'Alex Johnson', type: 'Payment', date: '2023-05-23', amount: 75 },{ receiver: 'John Doe', type: 'Payment', date: '2023-05-25', amount: 100 },
        { receiver: 'Jane Smith', type: 'Purchase', date: '2023-05-24', amount: 50 },
        { receiver: 'Alex Johnson', type: 'Payment', date: '2023-05-23', amount: 75 },
        
    ]
    return(
        <div className="cardd">
            <div className="transaction-title">
                Transactions history
            </div>
           <div className="ttc">
                <table className="transaction-table">
                    <thead>
                        <tr>
                            <th>Receiver</th>
                            <th>Type</th>
                            <th>Date</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction, index) => (
                            <tr key={index}>
                                <td>{transaction.receiver}</td>
                                <td>{transaction.type}</td>
                                <td>{transaction.date}</td>
                                <td>{transaction.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default CardHistory;