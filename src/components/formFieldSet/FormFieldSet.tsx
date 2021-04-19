import { FC } from "react";
interface FormFieldSetProps {
  type: string;
  label: string;
  inputValue: string;
  handleChange: (e: any) => void;
}

const FormFieldSet: FC<FormFieldSetProps> = ({
  type,
  label,
  inputValue,
  handleChange,
}) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        type={type}
        className="form-control"
        value={inputValue}
        onChange={e => {
          handleChange(e);
        }}
      />
    </div>
  );
};

export default FormFieldSet;

// setRegistrationData({
//   ...registrationData,
//   password: e.target.value,
