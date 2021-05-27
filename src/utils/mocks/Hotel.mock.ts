import { Hotel } from "../../utils/types/Hotel";
export const singleHotel: Hotel = {
  id: 42,
  name: "Courtyard by Marriott Belgrade City Center",
  city: "Belgrade",
  country: "Serbia",
  image: "http://127.0.0.1:8000/media/images/54129602.jpg",
  stars: 4,
  date: new Date(),
  description:
    "Featuring free WiFi and a fitness center, Courtyard by Marriott Belgrade City Center offers accommodations in Belgrade. Guests can enjoy the on-site bar. Private parking is available on site.\r\n\r\nAll rooms have a flat-screen TV. Certain accommodations include a sitting area for your convenience. You will find a kettle in the room. All rooms include a private bathroom fitted with a shower. For your comfort, you will find free toiletries and a hairdryer.\r\n\r\nYou will find a 24-hour front desk at the property.\r\n\r\nThe hotel also provides bike rental. Pančevo is 16.1 km from Courtyard by Marriott Belgrade City Center, and Smederevo is 40.2 km from the property. The nearest airport is Nikola Tesla Airport, 12.9 km from the property.",
  price: 52.0,
  likes: 45,
  dislikes: 2,
  user: [73, 100],
  location: "44.8170754,20.4580087",
  reviews: [
    {
      id: 5,
      message:
        "Everyone was friendly and helpful, it was clean and spacious. The hotel has a great restaurant, which I would recommend.",
      created_at: "2017-04-13T18:12:25.344124Z",
      likes: 2,
      dislikes: 0,
      positive: true,
      author: {
        id: 1,
        first_name: "Marko",
        last_name: "Kovacina",
      },
    },
    {
      id: 6,
      message: "All in this hotell is about service. Best in Belgrad :)",
      created_at: "2017-04-13T18:12:46.860839Z",
      likes: 0,
      dislikes: 0,
      positive: false,
      author: {
        id: 3,
        first_name: "Bozidar",
        last_name: "Zecevic",
      },
    },
  ],
};
