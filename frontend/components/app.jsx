import React from "react";
import { Route, Switch } from "react-router-dom";
import SignupContainer from "./session_form/signup_container";
import LoginContainer from "./session_form/login_container";
import SplashContent from "./splash/splash_content";
import BoardContainer from './board/board_container'
import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = (props) => {
  return (
    <div>
      <img src={window.images.logo} alt="trollo-logo" />
      <Switch>
        <AuthRoute path="/signup" component={SignupContainer} />
        <AuthRoute path="/login" component={LoginContainer} />
        <AuthRoute path="/" component={SplashContent} />
        <ProtectedRoute path="/users/:userId/boards" component={BoardContainer}/>
      </Switch>   
    </div>
  );
};

export default App;
