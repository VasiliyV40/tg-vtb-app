import {AUTHORIZATION, FIELDCHANGE} from "../actions/actionTypes";

const initialState = {
  /*login: "",
  password: "",*/
  form: {
    password: "",
    phone: ""
  },
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
      case FIELDCHANGE:
        const {name, value, filter} = action.payload
        return {
          ...state,
          form: {
            ...state.form,
            [name]: filter ? value.replace(filter, "") : value
          }
        }
      default:
        return state
    }
  }