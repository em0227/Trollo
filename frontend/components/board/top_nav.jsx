import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/session_actions";

export default (props) => {
  // const showLeftNav = useSelector((state) => state.ui.showLeftNav);
  const dispatch = useDispatch();
  return (
    <nav className="board-nav">
      <img src={window.images.whiteLogo} alt="trollo-logo" />
      <div className="links">
        <p>Notifications</p>
        <p>User Settings</p>
        <button onClick={() => dispatch(logout())}>Log Out</button>
      </div>
    </nav>
  );
};
