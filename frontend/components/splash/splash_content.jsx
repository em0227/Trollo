import React from "react";
import { Link } from "react-router-dom";

export default () => {

  return (
    <div className="splash">
      <div className="top-container">
        <nav>
          <Link to="/login">Login</Link>
            <br />
          <Link to="/signup">Sign up</Link>
        </nav>

        <main>
          <h2>Trollo helps teams move work forward.</h2>
          <p>
            Collaborate, manage projects, and reach new productivity peaks. From
            high rises to the home office, the way your team works is
            unique—accomplish it all with Trollo.
          </p>
        </main>
        <img src={window.images.mainBoard} alt="teamwork" />
      </div>
    </div>
  );
};
