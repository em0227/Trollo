import React from "react";
import { Route, Switch } from "react-router-dom";
import SignupContainer from "./session_form/signup_container";
import LoginContainer from "./session_form/login_container";
import SplashContentContainer from "./splash/splash_content_container";
import BoardContainer from "./board/board_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = (props) => {
  return (
    <div>
      <Switch>
        <ProtectedRoute
          path="/users/:userId/boards"
          component={BoardContainer}
        />
        <AuthRoute path="/signup" component={SignupContainer} />
        <AuthRoute path="/login" component={LoginContainer} />
        <AuthRoute path="/" component={SplashContentContainer} />
      </Switch>
    </div>
  );
};

export default App;
