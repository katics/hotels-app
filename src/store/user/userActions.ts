import { AnyAction } from "redux";
import { UserRegistrationData } from "../../utils/types/UserRegistrationData";

export const registerUser = (userRegData: UserRegistrationData): AnyAction => ({
  type: "",
  userRegData,
});
