import React from "react";
import { Link } from "react-router-dom";

export default () => {

  return (
    <div className="splash">
      
        <nav>
          <img src={window.images.logo} alt="trollo-logo" />
          <div className="links">
            <Link to="/login">Login</Link>
            <br />
            <Link to="/signup">Sign up</Link>
          </div>
        </nav>

        <div className="top-container">
          <div className="top-container-text">
            <h1>Trollo helps teams move work forward.</h1>
            <br />
            <p>
              Collaborate, manage projects, and reach new productivity peaks. From
              high rises to the home office, the way your team works is
              unique—accomplish it all with Trollo.
            </p>
          </div>
          <img src={window.images.mainBoard} alt="teamwork" />
        </div>
        
      
    </div>
  );
};
