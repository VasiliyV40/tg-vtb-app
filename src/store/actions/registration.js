import {FIELDCHANGE, CLEARFORM} from "./actionTypes";

export function changeInput(data){
  return {
    type: FIELDCHANGE,
    payload: data
  }
}

export function clearForm(){
  return {
    type: CLEARFORM
  }
}