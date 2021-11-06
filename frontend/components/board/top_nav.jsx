import React from "react";
import { useSelector } from "react-redux";

export default (props) => {
  const showLeftNav = useSelector((state) => state.ui.showLeftNav);
  return (
    <nav className="board-nav">
      <img src={window.images.whiteLogo} alt="trollo-logo" />
      <div className="links">
        <p>Notifications</p>
        <p>User Settings</p>
        <button onClick={logout}>Log Out</button>
      </div>
    </nav>
  );
};
