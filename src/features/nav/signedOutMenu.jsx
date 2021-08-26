import React from "react";

import { Menu, Button } from "semantic-ui-react";

export default function SignedOutMenu({ setAuthenticated }) {
  return (
    <Menu.Item position="right">
      <Button
        onClick={() => setAuthenticated(true)}
        basic
        inverted
        content="Login"
      ></Button>
      <Button
        basic
        inverted
        content="signup"
        style={{ marginLeft: "0.5em" }}
      ></Button>
    </Menu.Item>
  );
}
