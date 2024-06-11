import Ring_1 from "../images/timeline/Ring_1.png";
import Ring_2 from "../images/timeline/Ring_2.png";
import Ring_3 from "../images/timeline/Ring_3.png";
import Ring_4 from "../images/timeline/Ring_4.png";

export const EventTimeline = [
  {
    date: new Date("2024-06-02"),
    number: 1,
    circleText: "Registration Begins",
    modelText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    alt: "Registration Start Date",
    displayDate: "2nd June",
    ringImg: Ring_1,
  },
  {
    date: new Date("2024-06-28"),
    number: 2,
    circleText: "Hackathon Starts",
    modelText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    alt: "Hackathon Start Date",
    displayDate: "28th June",
    ringImg: Ring_2,
  },
  {
    date: new Date("2024-06-30"),
    number: 3,
    circleText: "Hackathon In Progress",
    alt: "Hackathon Progress Date",
    modelText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    displayDate: "28-30th June",
    ringImg: Ring_3,
  },
  {
    date: new Date("2024-07-01"),
    number: 4,
    circleText: "Hackathon Ends",
    modelText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    alt: "Hackathon End Date",
    displayDate: "30th June",
    ringImg: Ring_4,
  },
];
