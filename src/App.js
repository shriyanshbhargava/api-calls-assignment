import axios from "axios";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUserList = () => {
    setLoading(true);
    axios.get("https://reqres.in/api/users?page=2").then((res) => {
      setUserList(res.data.data);
      setLoading(false);
    });
  };

  return (
    <div className="App">
      <div className="navbar">
        <h4 className="header">AirData</h4>
        <button
          className="usersButton"
          onClick={getUserList}
          disabled={loading}
        >
          Get User Data
        </button>
      </div>{" "}
      <table className="dataTable">
        <tr>
          <th>Avatar</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
        <tbody>
          {userList.map((x, i) => (
            <tr key={i}>
              <td>
                <img src={x.avatar} width="50" height="50" alt={x.avatar} />
              </td>
              <td>{x.first_name}</td>
              <td>{x.last_name}</td>
              <td>{x.email}</td>
            </tr>
          ))}
          {userList.length === 0 && (
            <tr>
              
                <b>No data found to display.</b>
              
            </tr>
          )}
        </tbody>
      </table>{" "}
    </div>
  );
}

export default App;
