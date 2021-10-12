import React from "react";
import "./box.css";
export default function box(props) {
  return (
    <>
      {props.userData.map((user, index) => {
        return (
          <div className="boxmain">
            <div className="box">
              <img src={user.avatar} alt="" className="boximg" />
              <div className="info">
                <h3 className="infoname">
                  {user.first_name} {user.last_name}
                </h3>
                <p className="infomail">{user.email}</p>
                <button className="btndetail">For Detail</button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
