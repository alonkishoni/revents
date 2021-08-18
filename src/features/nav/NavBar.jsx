import { Container, Menu, Button } from "semantic-ui-react";

function Navbar({ setFormOpen }) {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header>
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ marginRight: 15 }}
          ></img>
          Re-vents
        </Menu.Item>
        <Menu.Item name="Events"></Menu.Item>
        <Menu.Item>
          <Button
            onClick={() => setFormOpen(false)}
            positive
            inverted
            content="Create Event"
          ></Button>
        </Menu.Item>
        <Menu.Item>
          <Button basic inverted content="Login"></Button>
          <Button
            basic
            inverted
            content="signup"
            style={{ marginLeft: "0.5em" }}
          ></Button>
        </Menu.Item>
      </Container>
    </Menu>
  );
}

export default Navbar;
