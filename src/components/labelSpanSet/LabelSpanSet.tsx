import { FC } from "react";

interface Props {
  labelTitle: string;
  spanValue: string;
}
const LabelSpanSet: FC<Props> = ({ labelTitle, spanValue }) => {
  return (
    <div>
      <label>{labelTitle}</label>
      <span> {spanValue}</span>
    </div>
  );
};

export default LabelSpanSet;
