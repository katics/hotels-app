import axios from "axios";
import { UserLoginData } from "./types/UserLoginData";
const apiUrl = "http://127.0.0.1:8000";

export const getTokenAPI = (loginData: UserLoginData): any => {
  return axios({
    url: apiUrl + "/api-token-auth",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data: JSON.stringify(loginData),
  }).catch(err => {
    console.log(err);
  });
};
