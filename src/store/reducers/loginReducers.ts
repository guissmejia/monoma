import { LoginState } from "../states/LoginState";
import { LoginAction } from "../actions/loginActions";

export const initialState: LoginState = {
    password: "",
    email: "",
    isLoading: false,
    error: "",
    isLoggedIn: false,
  };
  

export const loginReducer = (state: LoginState, action: LoginAction): LoginState => {
    switch (action.type) {
      case "login": {
        return {
          ...state,
          error: "",
          isLoading: true,
        };
      }
      case "success": {
        return { ...state, error: "", isLoading: false, isLoggedIn: true };
      }
      case "error": {
        return {
          ...state,
          isLoading: false,
          isLoggedIn: false,
          email: "",
          password: "",
          error: "Incorrect username or password!",
        };
      }
      default:
        return state;
    }
  };