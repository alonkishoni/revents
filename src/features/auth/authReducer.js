import { SIGN_IN_USER } from "./authConstants";
import { SIGN_OUT_USER } from "./authConstants";

const initialState = {
  authenticated: true,
  currentUser: { email: "bob@test.com", photoURL: "/assets/logo.png" },
};

export default function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SIGN_IN_USER:
      return {
        ...state,
        currentUser: {
          email: payload.email,
          photoURL: "/assets/user.png",
        },
        authenticated: true,
      };
    case SIGN_OUT_USER:
      return {
        ...state,
        currentUser: null,
        authenticated: false,
      };
    default:
      return state;
  }
}
