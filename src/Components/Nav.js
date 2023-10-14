import React from "react";
import "../App.css";

const Nav = () => {
  return (
    <nav id="nv" style={{ position: "sticky" }} className="navbar navv">
      <a
        className=" try ms-5 text-light  text-decoration-none"
        href="navbar-brand"
      >
      Sai Krishna
      </a>
      <div className="nav">
        <a
          className=" try nav-link  mx-4 text-light text-decoration-none "
          href="#nv"
        >
          Home
        </a>
        <a
          className=" nav-link mx-4 text-light text-decoration-none "
          href="#aboutMe"
        >
          About me
        </a>
        <a
          className=" nav-link mx-4 text-light text-decoration-none "
          href="#skill"
        >
          Skills
        </a>
        <a
          className=" nav-link mx-4 text-light text-decoration-none "
          href="#myWorks"
        >
          My Works
        </a>
        <a
          className=" nav-link me-4 text-light text-decoration-none "
          href="#conc"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};
export default Nav;
