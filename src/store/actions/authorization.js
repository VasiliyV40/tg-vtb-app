import {AUTHORIZATION} from "./actionTypes";

export default function signIn(tel, pass, isLogin){
  return {
    type: AUTHORIZATION,
  }
}