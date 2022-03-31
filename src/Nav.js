import React, { useEffect, useState } from "react";
import "./Nav.css";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPlan } from "./features/planSlice";

function Nav() {
  const [show, handleShow] = useState(false);
  const history = useHistory();
  const plan = useSelector(selectPlan);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else handleShow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          onClick={() => {
            plan ? history.push("/") : history.push("/profile");
          }}
          className="nav__logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <img
          onClick={() => history.push("/profile")}
          className="nav__avatar"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png "
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
