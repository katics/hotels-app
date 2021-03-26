import { UserLoginData } from "./UserLoginData";
import { UserRegistrationData } from "./UserRegistrationData";

export interface User {
  userRegistrationData: UserRegistrationData;
  userLoginData: UserLoginData;
}
