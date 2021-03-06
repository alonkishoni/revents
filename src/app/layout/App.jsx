import React from "react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import Navbar from "../../features/nav/NavBar";
import { Container } from "semantic-ui-react";
import { Route, useLocation } from "react-router-dom";
import HomePage from "../../features/home/homePage";
import EventDetailedPage from "../../features/events/eventDetailed/eventDetailedPage";
import EventForm from "../../features/events/eventForm/eventForm";
import Sandbox from "../../features/sandbox/sandbox";

function App() {
const {key} = useLocation();

  return (
    <>
      <Route exact path="/" component={HomePage} />

      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <Navbar></Navbar>
            <Container className="main">
              <Route exact path="/events" component={EventDashboard} />
              <Route exact path="/sandbox" component={Sandbox} />

              <Route path="/events/:id" component={EventDetailedPage} />
              <Route
                path={["/createEvent", "/manage/:id"]}
                component={EventForm}
                key={key}
              />
            </Container>
          </>
        )}
      />
    </>
  );
}

export default App;
