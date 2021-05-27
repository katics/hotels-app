import axios from "axios";
import { TOKEN_LS_NAME } from "./common/constantNames";
import { FavouriteHotelRequest } from "./types/FavouriteHotelRequest";
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

export const getHotelReviewsAPI = (hotelId: number): any => {
  return axios({
    url: apiUrl + "/hotel_api/get_hotel_reviews/" + hotelId + "/",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).catch(err => {
    console.log(err);
  });
};

export const fetchHotels = (): any => {
  return axios({
    url: apiUrl + "/hotel_api/",
    method: "GET",
  }).catch(err => {
    console.log(err);
  });
};

export const fetchHotelDetailsAPI = (hotelId: string): any => {
  return axios({
    url: apiUrl + "/hotel_api/" + hotelId,
    method: "GET",
  }).catch(err => {
    console.log(err);
  });
};

export const toggleFavouritesAPI = (request: FavouriteHotelRequest): any => {
  const { userID, ...requestAPI } = request;
  return axios({
    url: apiUrl + "/favorites/add_remove",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(requestAPI),
  }).catch(err => {
    console.log(err);
  });
};

export const fetchFavHotelsAPI = (): any => {
  return axios({
    url: apiUrl + "/favorites",
    method: "GET",
  }).catch(err => {
    console.log(err);
  });
};
