import React from "react";
import TopNav from "./top_nav";
import BoardContainer from "./board_container";

export default (props) => {
  return (
    <div className="main">
      <TopNav />
      <BoardContainer />
    </div>
  );
};
