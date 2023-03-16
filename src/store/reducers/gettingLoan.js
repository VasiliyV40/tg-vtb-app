import {CLEARFORM, FIELDCHANGE} from "../actions/actionTypes";
import React from "react";

const initialState = {}

export default function gettingLoan(state = initialState, action) {

  switch (action.type) {
    case FIELDCHANGE:
      const {name, value, filter} = action.payload
      return {
        ...state,
        [name]: filter ? value.replace(filter, "") : value
      }
    case CLEARFORM:
      return {}
    default:
      return state
  }
}



