import React from "react";

import UpperPart from "./UpperPart";
import LowerPart from "./LowerPart";

function RightMain() {
  return (
    <div className="patients_info">
      <div className="patients_content heading rightpart">
        <h4>Patient Information</h4>
      </div>
      <UpperPart />
      <LowerPart />
    </div>
  );
}

export default RightMain;
