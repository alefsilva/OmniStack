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

  async function handleLike(id) {
    console.log("like", id);
  }

  async function handleDislike(id) {
    console.log("dislike", id);
    await api.post(`devs/${id}/dislikes`, null, {
      headers: {
        user_id: props.match.params.routeId
      }
    }); // the second param of the method post is the body
  }

  return (
    <div className="wrap-main">
      <h1>routeId: {props.match.params.routeId}</h1>
      <img src={logo} alt="Tindev" />
      <ul>
        {users.map((
          user // (user, key)
        ) => (
          <li key={user._id}>
            {/*key={key}*/}
            <img src={user.avatar} alt={user.name} />
            <footer>
              <strong>{user.name}</strong>
              <p>{user.bio}</p>
            </footer>
            <div className="wrap-buttons">
              <button type="button" onClick={() => handleDislike(user._id)}>
                <img src={dislike} alt="Dislike" />
              </button>
              <button type="button" onClick={() => handleLike(user._id)}>
                <img src={like} alt="Like" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
