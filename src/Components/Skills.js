import React from "react";
import C from "./Pictures/C.png";
import Cpp from "./Pictures/c++.png";
import java from "./Pictures/java.jpeg";
import python from "./Pictures/Python-Logo.png";
import DSA from "./Pictures/DSA.png";

import html from "./Pictures/Html.png";
import Css from "./Pictures/CSS.png";
import JS from "./Pictures/JavaScript.png";
import Rct from "./Pictures/React.png";

import Eng from "./Pictures/English.png";
import Hin from "./Pictures/hindi.jpeg";
import Tel from "./Pictures/Telugu.png";

const Skills = () => {
  return (
    <div
      id="skill"
      className="me"
      style={{ marginTop: "10%", height: "100vh", paddingTop: "30px" }}
    >
      <h1>Skills</h1>
      <div className="box" style={{ marginTop: "5vh" }}>
        <h4>Programming Languages</h4>
        <img className="image" src={C} alt="C-language" height={"100px"} />{" "}
        <img className="image" src={Cpp} alt="C++" height={"100px"} />{" "}
        <img className="image" src={java} alt="java" height={"100px"} />{" "}
        <img className="image" src={python} alt="Pthon" height={"100px"} />{" "}
        <img className="image" src={DSA} alt="DSA" height={"100px"} />
      </div>

      <div className="box">
        <h4>Frontend Technologies</h4>
        <img className="image" src={html} alt="html" height={"100px"} />
        <img className="image" src={Css} alt="CSS" height={"100px"} />
        <img className="image" src={JS} alt="JavaScript" height={"100px"} />
        <img className="image" src={Rct} alt="React" height={"100px"} />
      </div>

      <div className="box">
        <h4>Languages Known</h4>
        <img className="image" src={Eng} alt="English" height={"100px"} />
        <img className="image" src={Hin} alt="Hindi" height={"100px"} />
        <img className="image" src={Tel} alt="Telugu" height={"100px"} />
      </div>
      <div
        style={{
          width: "95%",
          textAlign: "end",
        }}
      >
        <button
          onClick={(e) => {
            window.location.href = "#nv";
          }}
          style={{
            width: "40px",
            height: "40px",
            color: "black",
            fontSize: "large",
          }}
        >
          &uarr;
        </button>
      </div>
    </div>
  );
};

export default Skills;
