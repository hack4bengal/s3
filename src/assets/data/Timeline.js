import Inactive1 from "../images/timeline/Inactive1.png";
import Inactive2 from "../images/timeline/Inactive2.png";
import Inactive3 from "../images/timeline/Inactive3.png";
import Inactive4 from "../images/timeline/Inactive4.png";
import Active1 from "../images/timeline/Active1.png";
import Active2 from "../images/timeline/Active2.png";
import Active3 from "../images/timeline/Active3.png";
import Active4 from "../images/timeline/Active4.png";

export const EventTimeline = [
  {
    date: new Date('2024-06-01'),
    activeImage: Active1,
    inactiveImage: Inactive1,
    alt: "Registration Start Date",
    displayDate: "1st June 2024"
  },
  {
    date: new Date('2024-06-28'),
    activeImage: Active2,
    inactiveImage: Inactive2,
    alt: "Hackathon Start Date",
    displayDate: "28th June 2024"
  },
  {
    date: new Date('2024-06-30'),
    activeImage: Active3,
    inactiveImage: Inactive3,
    alt: "Hackathon Progress Date",
    displayDate: "28th - 30th June 2024"
  },
  {
    date: new Date('2024-07-01'),
    activeImage: Active4,
    inactiveImage: Inactive4,
    alt: "Hackathon End Date",
    displayDate: "30th June 2024"
  },
];
