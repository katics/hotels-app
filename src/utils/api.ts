import axios from "axios";
import { UserLoginData } from "./types/UserLoginData";
import { UserRegistrationData } from "./types/UserRegistrationData";

const apiUrl = "http://127.0.0.1:8000";

export const response_status_success = "Success";
export const response_status_created = "Created";

export const userLogin = (loginData: UserLoginData): any => {
  return axios({
    url: apiUrl + "/api-token-auth/",
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

export const registerUser = (registerUserData: UserRegistrationData): any => {
  delete registerUserData.confirmPassword;
  return axios({
    url: apiUrl + "/register/",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data: JSON.stringify(registerUserData),
  }).catch(err => {
    console.log(err);
  });
};

export const fetchHotels = (token: string) => {
  return axios({
    url: apiUrl + "/hotel_api/",
    method: "GET",
    headers: {
      Authorization: `Token ${token}`,
    },
  }).catch(err => {
    console.log(err);
  });
};

export const fetchHotelDetailsAPI = (hotelId: string) => {
  return axios({
    url: apiUrl + "/hotel_api/" + hotelId,
    method: "GET",
    headers: {
      Authorization: `Token fc6de7f1196b776fad0929fd44a5b93eb77aa4c3`, //TODO!!!!
    },
  }).catch(err => {
    console.log(err);
  });
};
