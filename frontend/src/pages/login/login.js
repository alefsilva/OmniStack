import React, { useState } from "react";
import "./Login.css";

import Logo from "../../assets/logo.svg";

export default function Login(props) { // destructuring mode: { history }
  const [userName, setUserName] = useState("");

  function _handleSubmit(event){
    event.preventDefault();
    console.log('userName ==', userName);
    props.history.push('/main');
  }

  return (
    <div className="wrap-login-page">
      <form onSubmit={_handleSubmit}>
        <img src={Logo} alt="Tindev" />
        <input
          placeholder="Digite o seu usuário do GitHub"
          value={userName}
          onChange={event => setUserName(event.target.value)} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
