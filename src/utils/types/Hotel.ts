import { HotelReview } from "./HotelReview";

export interface Hotel {
  id: number;
  name: string;
  city: string;
  country: string;
  image: string;
  stars: number;
  date: Date;
  description: string;
  price: number;
  likes: number;
  dislikes: number;
  user: number[];
  location: string;
  reviews: HotelReview[];
}
