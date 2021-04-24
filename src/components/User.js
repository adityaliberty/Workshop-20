import React from "react";
import Avatar from "../Static/dummy_photo.png";

function User(props) {
  return (
    <div className="patients_content users">
      <div className="user">
        <div className="avatar_img">
          <img src={Avatar} alt="" />
        </div>
        <div className="text_written">
          <h2>{props.name}</h2>
          <p>{props.clearence}</p>
        </div>
        <div
          className={props.clearence === "No Clearence" ? "dot red" : "dot"}
        ></div>
      </div>
    </div>
  );
}

export default User;
