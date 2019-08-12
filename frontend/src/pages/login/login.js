import React from "react";
import "./Login.css";

import Logo from "../../assets/logo.svg";

export default function Login() {
  return (
    <div className="wrap-login-page">
      <form>
        <img src={Logo} alt="Tindev" />
        <input placeholder="Digite o seu usuário do GitHub" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
