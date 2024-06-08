import h4b_logo from "../images/NavbarImages/navbar_h4b_logo.png";

const navbarContent = {
  logo: h4b_logo,
  links: [
    {
      text: "Home",
      link: "/",
    },
    // {
    //   text: "About",
    //   link: "about",
    // },

    {
      text: "Timeline",
      link: "timeline",
    },
    {
      text: "Venue",
      link: "venue",
    },
    {
      text: "Themes",
      link: "themes",
    },
    {
      text: "Prizes",
      link: "prizes",
    },
    {
      text: "Sponsors",
      link: "sponsors",
    },
    {
      text: "Team",
      link: "/team",
    },
  ],
  dropdown: {
    text: "More",
    links: [
      {
        text: "Mentors",
        link: "mentors",
      },
      {
        text: "Testimonials",
        link: "testimonials",
      },
      {
        text: "Events",
        link: "/events",
      },
      {
        text: "FAQ",
        link: "faq",
      },
    ],
  },
};

export default navbarContent;
