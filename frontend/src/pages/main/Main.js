import React from "react";

export default function Main(props) {
  return (
    <h1>routeId: {props.match.params.routeId}</h1>
  );
}
