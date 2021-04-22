import { FC } from "react";

interface buttonProps {
  title: string;
  handleClick: () => void;
}
const CustomButton: FC<buttonProps> = ({ title, handleClick }) => {
  return (
    <div>
      <button onClick={handleClick} className="btn btn-primary">
        {title}
      </button>
    </div>
  );
};

export default CustomButton;
