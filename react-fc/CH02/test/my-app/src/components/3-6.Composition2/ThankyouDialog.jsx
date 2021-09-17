import React from "react";
import Dialog from "./Dialog";

export default function ThankyouDialog() {
  return (
    // <Dialog
    //   title="Thanks"
    //   description="It is honor to meet you !"
    //   button="Close"
    // />
    <Dialog
      title={<h1 style={{ color: "purple" }}>Thank you</h1>}
      description="It is honor to meet you !"
      button={
        <button
          style={{
            backgroundColor: "#bae",
            color: "white",
            border: "none",
            borderRadius: 5,
          }}
        >
          close
        </button>
      }
    />
  );
}
