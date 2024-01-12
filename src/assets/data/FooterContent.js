import facebook_logo from "../images/FooterImages/facebook_logo.svg";
import footer_bg from "../images/FooterImages/footer_bg.webp";
import github_logo from "../images/FooterImages/github_logo.svg";
import instagram_logo from "../images/FooterImages/instagram_logo.svg";
import linkedin_logo from "../images/FooterImages/linkedin_logo.svg";
import twitter_logo from "../images/FooterImages/twitter_logo.svg";

const footerContent = {
  backgroundImage: footer_bg,
  socials: [
    {
      icon: github_logo,
      link: "https://github.com/hack4bengal",
      name:"github_logo"
    },
    {
      icon: instagram_logo,
      link: "https://www.instagram.com/hack4bengal",
      name:"instagram_logo"
    },
    {
      icon: twitter_logo,
      link: "https://twitter.com/hack4bengal",
      name:"twitter_logo"
    },
    {
      icon: facebook_logo,
      link: "https://www.facebook.com/Hack4Bengal",
      name:"facebook_logo"
    },
    {
      icon: linkedin_logo,
      link: "https://www.linkedin.com/company/hack4bengal",
      name:"linkedin_logo"
    },
  ],
  links: [
    {
      text: "Brand Assets",
      link: "/brand",
    },
    {
      text: "Code of Conduct",
      link: "/coc",
    },
  ],
  mail: {
    text: "Email Us for more details",
    address: "hack4bengal@gmail.com",
  },
  prevSeason: {
    text: "visit season 2",
    url: "https://s2.hack4bengal.tech/",
  },
};

export default footerContent;
