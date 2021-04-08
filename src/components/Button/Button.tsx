import { FC } from "react";

interface buttonProps {
  title: string;
  handleClick: () => void;
}
const CustomButton: FC<buttonProps> = props => {
  return (
    <div>
      <button onClick={props.handleClick} className="btn btn-primary">
        {props.title}
      </button>
    </div>
  );
};

export default CustomButton;
