import React, { useState } from "react";
import "./Login.css";

import Logo from "../../assets/logo.svg";
import Api from "../../services/Api";

export default function Login(props) {
  // destructuring mode: { history }
  const [userName, setUserName] = useState("");

  async function _handleSubmit(event) {
    event.preventDefault();
    console.log("userName ==", userName);

    const response = await Api.post("/devs", {
      username: userName
    });
    console.log("response.data ==", response.data);
    const { _id: id } = response.data;
    props.history.push(`/main/${id}`);
  }

  return (
    <div className="wrap-login-page">
      <form onSubmit={_handleSubmit}>
        <img src={Logo} alt="Tindev" />
        <input
          placeholder="Digite o seu usuário do GitHub"
          value={userName}
          onChange={event => setUserName(event.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
