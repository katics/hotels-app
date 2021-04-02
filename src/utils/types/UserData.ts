import { User } from "./User";

export interface UserData {
  isLogged: boolean;
  loginError: boolean;
  hasRegisred: boolean;
  registerError: boolean;
  currentUser: User;
}
