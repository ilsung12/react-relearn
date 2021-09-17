import React from "react";
import Dialog from "./Dialog";
import CustomDialog from "./CustomDialog";

export default function WelcomeDialog() {
    // return (
    //   <Dialog>
    //     <h1 style={{ color: "white" }}>Welcome !</h1>
    //     <h5>Thank you !</h5>
    //   </Dialog>
    // );
  return (
    <Dialog>
      <CustomDialog title="welcome" description="Thanks" />
    </Dialog>
  );
}
