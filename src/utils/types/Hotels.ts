import { Hotel } from "./Hotel";
import { Spinner } from "./Spinner";

export interface Hotels extends Spinner {
  listOfHotels: Hotel[];
  hotelDetails: Hotel;
  favHotels: Hotel[];
  isFavouriteFetched: boolean;
}
