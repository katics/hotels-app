import axios from "axios";
import { TOKEN_LS_NAME } from "./common/constantNames";
import { UserLoginData } from "./types/UserLoginData";
import { UserRegistrationData } from "./types/UserRegistrationData";

const apiUrl = "http://127.0.0.1:8000";

export const response_status_success = "Success";
export const response_status_created = "Created";

axios.interceptors.request.use((config): any => {
  const token = localStorage.getItem(TOKEN_LS_NAME);
  if (token != null) {
    config.headers.Authorization = `Token ${token}`;
    config.headers.Accept = "application/json";

    return config;
  } else {
    return config;
  }
});

export const userLogin = (loginData: UserLoginData): any => {
  return axios({
    url: apiUrl + "/api-token-auth/",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(loginData),
  }).catch(err => {
    console.log(err);
  });
};

export const registerUser = (registerUserData: UserRegistrationData): any => {
  const { confirmPassword, ...regUserDataApi } = registerUserData;
  console.log(JSON.stringify(regUserDataApi));
  return axios({
    url: apiUrl + "/register/",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(regUserDataApi),
  }).catch(err => {
    console.log(err);
  });
};

export const fetchHotels = (token: string): any => {
  return axios({
    url: apiUrl + "/hotel_api/",
    method: "GET",
    // headers: {
    //   //Authorization: `Token ${token}`,
    // },
  }).catch(err => {
    console.log(err);
  });
};

export const fetchHotelDetailsAPI = (hotelId: string): any => {
  return axios({
    url: apiUrl + "/hotel_api/" + hotelId,
    method: "GET",
    headers: {
      //Authorization: `Token fc6de7f1196b776fad0929fd44a5b93eb77aa4c3`, //TODO!!!!
    },
  }).catch(err => {
    console.log(err);
  });
};
