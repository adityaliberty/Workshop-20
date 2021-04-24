import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import User from "./User";
function LeftMain() {
  return (
    <div className="patients">
      <div className="patients_content heading">
        <h3>Patients</h3>
      </div>
      <div className="patients_content input">
        <input type="text" placeholder="Search Patients" />
        <AiOutlineSearch className="search_icon" />
      </div>
      <User name="Sara Smith" clearence="15 Aug 2020" />
      <User name="James Johnson" clearence="No Clearence" />
      <User name="Patrice Page" clearence="19 Aug 2020" />
      <User name="Derek Diamon" clearence="21 Aug 2020" />
    </div>
  );
}

export default LeftMain;
