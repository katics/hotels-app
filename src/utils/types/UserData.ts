import { Spinner } from "./Spinner";
import { User } from "./User";

export interface UserData extends Spinner {
  isLogged: boolean;
  loginError: boolean;
  hasRegisred: boolean;
  registerError: boolean;
  currentUser: User;
}
