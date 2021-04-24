import React from "react";
import "../styles/Main.css";
import LeftMain from "./LeftMain";
import RightMain from "./RightMain";

function Main() {
  return (
    <div className="main_container">
      <LeftMain />
      <RightMain />
    </div>
  );
}

export default Main;
