import "../styles/pages/Log.css";
import logo from "../assets/myKeeApp.png";

import React from "react";

const Log = () => {
  return (
    <div className="content">
      <div className="log_card">
        <section className="logo_section">
          <img
            src="https://ucarecdn.com/149afb0a-b8c2-4c32-bc6a-6a80628e4506/"
            alt="logo"
            width={500}
            id="logo"
          />
          <span>Welcome to MyKeeApp</span>
        </section>

        <section className="submit_section">
          <input type="text" placeholder="Login" />
          <input type="text" placeholder="Password" />
          <button>LOGIN</button>
        </section>
      </div>
    </div>
  );
};

export default Log;
