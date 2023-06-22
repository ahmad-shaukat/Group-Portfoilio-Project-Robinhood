import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import NewNotes from "./components/NewNotes"
import EditNotes from "./components/EditNotes"
import ListNotes from "./components/ListNotes"
import Test from "./components/test/Test"
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/" >
            <Test/>
          </Route>
          <Route exact path="/notes/">
            <ListNotes/>
          </Route>
          <Route path="/notes/new">
            <NewNotes/>
          </Route>
          {/* <Route path="/notes/:id/edit">
            <EditNotes/>
          </Route> */}
          <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
