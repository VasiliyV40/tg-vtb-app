import {AUTHORIZATION} from "../actions/actionTypes";

const initialState = {
  login: "",
  password: "",
  loading: false,
  signIn: false,
  errors: null
}

export default function authorization(state = initialState, action) {
    switch (action.type) {
      case AUTHORIZATION:

        return {
          ...state,
          signIn: !state.signIn,
        }
      default:
        return state
    }
  }