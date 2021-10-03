import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../app/common/modals/modalReducer";
import { signOutUser } from "../auth/authActions";

import { Menu, Button } from "semantic-ui-react";

export default function SignedOutMenu({ setAuthenticated }) {
  const dispatch = useDispatch();
  return (
    <Menu.Item position="right">
      <Button
        onClick={() => dispatch(openModal({ modalType: "LoginForm" }))}
        basic
        inverted
        content="Login"
      ></Button>
      <Button
        onClick={() => dispatch(signOutUser())}
        basic
        inverted
        content="signup"
        style={{ marginLeft: "0.5em" }}
      ></Button>
    </Menu.Item>
  );
}
