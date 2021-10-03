import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Container, Menu, Button } from "semantic-ui-react";
import SignedInMenu from "./signedInMenu";
import SignedOutMenu from "./signedOutMenu";

function Navbar({ setFormOpen }) {
  const { authenticated } = useSelector((state) => state.auth);

  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item exact as={NavLink} to="/" header>
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ marginRight: 15 }}
          ></img>
          Re-vents
        </Menu.Item>
        <Menu.Item as={NavLink} to="/events" name="Events"></Menu.Item>
        <Menu.Item as={NavLink} to="/sandbox" name="Sandbox"></Menu.Item>
        {authenticated && (
          <Menu.Item as={NavLink} to="/createEvent">
            <Button positive inverted content="Create Event"></Button>
          </Menu.Item>
        )}
        {authenticated ? <SignedInMenu /> : <SignedOutMenu />}
      </Container>
    </Menu>
  );
}

export default Navbar;
