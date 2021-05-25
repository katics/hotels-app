import { HotelReviewAuthor } from "./HotelReviewAuthor";

export interface HotelReview {
  id: number;
  message: string;
  created_at: string;
  likes: number;
  dislikes: number;
  positive: boolean;
  author: HotelReviewAuthor;
}
