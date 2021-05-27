import { FC } from "react";
import { HotelReview } from "../../../utils/types/HotelReview";
import SingleHotelReviewLayout from "../singleHotelReviewLayout/SingleHotelReviewLayout";

interface hotelReviewsProps {
  hotelReview: HotelReview[];
}

const HotelReviewsLayout: FC<hotelReviewsProps> = ({ hotelReview }) => {
  return (
    <div>
      User Reviews:
      {hotelReview.length ? (
        hotelReview.map(review => {
          return (
            <SingleHotelReviewLayout
              message={review.message}
              authorFirstName={review.author.first_name}
              authorLastName={review.author.last_name}
              createdDate={new Date(review.created_at).toLocaleDateString()}
              likes={review.likes.toString()}
              dislikes={review.dislikes.toString()}
              positive={review.positive}
            />
          );
        })
      ) : (
        <div>No reviews for this hotel</div>
      )}
    </div>
  );
};

export default HotelReviewsLayout;
