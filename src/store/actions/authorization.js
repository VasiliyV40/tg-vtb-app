import {AUTHORIZATION, FIELDCHANGE} from "./actionTypes";

export function changeInput(data){
  return {
    type: FIELDCHANGE,
    payload: data
  }
}

export function signIn(){
  return {
    type: AUTHORIZATION,
  }
}