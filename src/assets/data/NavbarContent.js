import h4b_logo from "../images/NavbarImages/navbar_h4b_logo.png";

const navbarContent = {
  logo: h4b_logo,
  links: [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "About",
      link: "about",
    },
    {
      text: "Timeline",
      link: "timeline",
    },
    // {
    //   text: "Themes",
    //   link: "themes",
    // },
    {
      text: "Prizes",
      link: "prizes",
    },
    {
      text: "Sponsors",
      link: "sponsors",
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
      {
        text: "Team",
        link: "/team",
      },
    ],
  },
};

export default navbarContent;
