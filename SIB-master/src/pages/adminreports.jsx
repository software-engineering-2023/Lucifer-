import React from "react";
function AdminReports(){
     const reports= [
        { id: 1, title: 'User3451:Application Error...' },
        { id: 2, title: 'EslamBAK: Cant Redeem My.... '},
        { id: 3, title: 'AbalaahAli: Account Disabled..' },
        { id: 5, title: 'AbalaahAli: Account Disabled..' },
        { id: 4, title: 'AbalaahAli: Account Disabled..' },
        { id: 3, title: 'AbalaahAli: Account Disabled..' },
        { id: 5, title: 'AbalaahAli: Account Disabled..' },
        { id: 4, title: 'AbalaahAli: Account Disabled..' },
        { id: 3, title: 'AbalaahAli: Account Disabled..' },
        { id: 5, title: 'AbalaahAli: Account Disabled..' },
        { id: 4, title: 'AbalaahAli: Account Disabled..' }
      ]
    return(
        <div className="Sherif">
        <h1h>Client Reports</h1h>
        <div className="break"></div>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {reports.map(report => (
            <li key={report.id} style={{ width : '100%' ,justifyContent:'center',width: '70%', textAlign: 'center', padding: '30px', borderBottom: '1px solid #C94926' }}>
              {report.title}
              <button >View</button>
            </li>
          ))}
        </ul>
      </div>
    );
}
export default AdminReports;