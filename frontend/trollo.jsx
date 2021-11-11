import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";
import { shareBoard, unshareBoard } from "./actions/share_actions";

document.addEventListener("DOMContentLoaded", () => {
  // console.log("in trollo");
  // console.log("test");
  let store;
  if (window.currentUser) {
    const { currentUser } = window;
    const { id } = currentUser;
    const preloadedState = {
      entities: {
        users: { [id]: currentUser },
      },
      session: { id },
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  //test
  window.store = store;
  // window.unshareBoard = unshareBoard;
  // window.shareBoard = shareBoard;

  //test end

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
