import { FC } from "react";
import LabelSpanSet from "../../labelSpanSet/LabelSpanSet";

import "./SingleHotelReviewLayout.scss";
interface hotelReviewProps {
  message: string;
  authorFirstName: string;
  authorLastName: string;
  createdDate: string;
  likes: string;
  dislikes: string;
  positive: boolean;
}
const SingleHotelReviewLayout: FC<hotelReviewProps> = ({
  message,
  authorFirstName,
  authorLastName,
  createdDate,
  likes,
  dislikes,
  positive,
}) => {
  return (
    // <div className="container-fluid review-container">
    <div
      className={`container-fluid review-container ${
        positive ? `positive` : `negative`
      }`}
    >
      <div className="row col-md-12">
        <div className="col-md-4 user">
          <div className="text-center ">
            <LabelSpanSet
              labelTitle="Author: "
              spanValue={authorFirstName + " " + authorLastName}
            />
            <LabelSpanSet labelTitle="Date posted: " spanValue={createdDate} />
            <LabelSpanSet labelTitle="Likes: " spanValue={likes} />
            <LabelSpanSet labelTitle="Dislikes: " spanValue={dislikes} />
          </div>
        </div>
        <div className="col-md-8">
          <div>{message}</div>
        </div>
      </div>
    </div>
  );
};

export default SingleHotelReviewLayout;
