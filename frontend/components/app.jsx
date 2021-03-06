import React from "react";
import { Route, Switch } from "react-router-dom";
import SignupContainer from "./session_form/signup_container";
import LoginContainer from "./session_form/login_container";
import SplashContentContainer from "./splash/splash_content_container";
// import BoardContainer from "./board/board_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import MainContainer from "./board/main_container";

const App = (props) => {
  return (
    <div className="app">
      <Switch>
        <AuthRoute exact path="/" component={SplashContentContainer} />
        <AuthRoute path="/signup" component={SignupContainer} />
        <AuthRoute path="/login" component={LoginContainer} />
        <ProtectedRoute path="/" component={MainContainer} />
      </Switch>
    </div>
  );
};

export default App;
