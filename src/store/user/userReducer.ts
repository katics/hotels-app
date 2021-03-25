import { User } from "../../utils/types/User";
import { REGISTER_USER } from "./userActionTypes";

const initialState: User = {
  userRegistrationData: {
    userName: "katics",
    firstName: "Sasa",
    lastName: "Katic",
    email: "katics@gsdf.dfo",
    password: "123456",
    confirmPassword: "123456",
  },
};

const user = (state = initialState, action: any = {}): User => {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state }; //TODO
    default:
      return state;
  }
};

export default user;
