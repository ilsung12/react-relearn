import React from "react";

function Welcome(props) {
  return <h1>hello, {props.name}</h1>;
}

export default function Composition() {
  return (
    <div>
        <Welcome name="lisung" />
        <Welcome name="lisung" />
        <Welcome name="lisung" />
        <Welcome name="lisung" />
        <Welcome name="lisung" />
    </div>
  );
}
