import React from "react";

import link from "./Pictures/link.png";

const Contact = () => {
  return (
    <div
      id="conc"
      style={{
        marginLeft: "100px",
        height: "100vh",
        paddingTop: "5%",
      }}
    >
      <h1>Contact me at</h1>
      <div className="bx">
        <div>
          <img
            style={{ width: "200px", height: "100px" }}
            src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
            alt="mail at"
          />
          <br />
          <a href="mailto:saikrishnareddyssk@gmail.com">
            Click here &rarr;
          </a>
        </div>
        <div>
          <img
            alt="LinkedIn"
            src={link}
            style={{ width: "200px", height: "100px" }}
          />
          <br />
          <a
            href="https://www.linkedin.com/in/sai-krishna-48277b286/"
            target="_blank"
            rel="noreferrer"
          >
            Click here &rarr;
          </a>
        </div>
        <div>
          <img
            src="https://vesperllama.github.io/portfolio-website/resources/github.svg"
            alt="git"
            style={{ width: "200px" }}
          />
          <br />
          <a
            href="https://github.com/saikrishnask8"
            target="_blank"
            rel="noreferrer"
          >
            Click here &rarr;
          </a>
        </div>
      </div>
      <div
        style={{
          marginTop: "10%",
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
export default Contact;
