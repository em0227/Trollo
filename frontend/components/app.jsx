import React from "react";
import { Route } from "react-router";

const App = (props) => {
  return (
    <div>
      <h1>Welcome to Trollo!!</h1>
      <Route path="/" component={SplashContent} />
      <Route path="/signup" component={SignupContainer} />
      <Route path="/login" component={LoginContainer} />
    </div>
  );
};

export default App;
