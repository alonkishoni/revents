import React, {useState} from "react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import Navbar from "../../features/nav/NavBar";
import { Container } from "semantic-ui-react";

function App() {
    const [formOpen, setFormOpen] = useState(false);
  return (
    <>
      <Navbar setFormOpen={setFormOpen}></Navbar>
      <Container className="main">
        <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} />
      </Container>
    </>
  );
}

export default App;
