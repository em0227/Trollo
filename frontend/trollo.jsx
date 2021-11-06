import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";
import { logout } from "./actions/session_actions";
import { fetchUserAndAllBoards } from "./actions/board_actions";

document.addEventListener("DOMContentLoaded", () => {
  // console.log("in trollo");
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
  window.logout = logout;
  window.fetchUserAndAllBoards = fetchUserAndAllBoards;

  //test end

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
