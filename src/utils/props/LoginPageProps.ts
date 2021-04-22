import { UserLoginData } from "../types/UserLoginData";

export interface ILoginProps {
  signInClick: (e: any) => void;
  setUserName: (e: any) => void;
  setPassword: (e: any) => void;
  loginData: UserLoginData;
  loginError: boolean;
}

export interface LoginProps {
  loginProps: ILoginProps;
}
