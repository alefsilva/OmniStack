import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import like from "../../assets/like.svg";
import dislike from "../../assets/dislike.svg";
import "./Main.css";

import api from "../../services/Api";

export default function Main(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async function loadUsers() {
      console.log("props.match.params.routeId", props.match.params.routeId);
      const response = await api.get("/devs", {
        headers: {
          user_id: props.match.params.routeId
        }
      });
      console.log("response.data", response.data);
      setUsers(response.data);
    })(); // it will execute this function automatically

    //loadUsers();
  }, [props.match.params.routeId]); // if the second parameter was [], the useEffect will be run once

  return (
    <div className="wrap-main">
      <h1>routeId: {props.match.params.routeId}</h1>
      <img src={logo} alt="Tindev" />
      <ul>
        {users.map(user => (
          <li>
            <img src={users[0] ? users[0].avatar : "x"} />
            <footer>
              <strong>João Pedro Schmitz</strong>
              <p>
                A Front End developer that is an enthusiast of new technologies
                and a JavaScript fan.A Front End developer that is an enthusiast
                of new technologies and a JavaScript fanA Front End developer
                that is an enthusiast of new technologies and a JavaScript fan
              </p>
            </footer>

            <div className="wrap-buttons">
              <button type="button">
                <img src={dislike} alt="Dislike" />
              </button>
              <button type="button">
                <img src={like} alt="Like" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
