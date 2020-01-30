import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import Alert from "./components/alert/alert.component";
import setAuthToken from "./utils/setAuthToken";
import Dashboard from "./components/dashboard/dashboard.component";
import PrivateRoute from "./components/routing/private-route.component";
import Search from "./pages/search/search.component.jsx";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import { getCurrentProfile } from "./actions/profile";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  // load user once per mount/unmount
  useEffect(() => {
    store.dispatch(loadUser());
    store.dispatch(getCurrentProfile());
  }, []);
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Alert />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signin" component={SignInAndSignUpPage} />
          <Route exact path="/search" component={Search} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </Provider>
  );
};

export default App;
