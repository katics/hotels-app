import { FC } from "react";
interface ErrorProps {
  ErrorMessage: string;
  CssClass: string;
}

const FormError: FC<ErrorProps> = ({ ErrorMessage, CssClass }) => {
  return <div className={CssClass}>{ErrorMessage}</div>;
};

export default FormError;
