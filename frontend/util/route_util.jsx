import React from "react";
import { Route, Redirect, withRouter } from "react-router";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  loggedin: Boolean(state.session.id),
  id: state.session.id,
});

const Auth = ({ id, loggedin, path, exact, component: Component }) => (
  <Route
    exact={exact}
    path={path}
    render={(props) =>
      loggedin ? (
        <Redirect to={`/users/currentUser/boards`} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const Protected = ({ loggedin, path, exact, component: Component }) => (
  <Route
    exact={exact}
    path={path}
    render={(props) =>
      loggedin ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
