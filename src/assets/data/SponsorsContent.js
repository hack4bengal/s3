import devcon from "../images/SponsorImages/devcon.png";
import filecoin from "../images/SponsorImages/filecoin.png";
import github from "../images/SponsorImages/github.png";
import graph from "../images/SponsorImages/graph.png";
import xyz from "../images/SponsorImages/xyz.png";
import router from "../images/SponsorImages/router.png";
import jis from "../images/SponsorImages/jis.png";

const sponsors = {
  Platinum: [
    {
      name: "Filecoin",
      img: filecoin,
      link: "https://filecoin.io/",
    },
  ],
  Gold: [
    {
      name: "Github",
      img: github,
      link: "https://github.com/",
    },
    {
      name: "Graph",
      img: graph,
      link: "https://thegraph.com/",
    },
  ],
  Silver: [
    {
      name: "Road To DevCon",
      img: devcon,
      link: "https://devcon.org/en/",
    },
  ],
  Bronze: [
    {
      name: "Router Protocol",
      img: router,
      link: "https://www.routerprotocol.com/",
    },
  ],
  Domain: [
    {
      name: "xyz",
      img: xyz,
      link: "https://www.xyz.com",
    },
  ],
  Education: [
    {
      name: "JIS",
      img: jis,
      link: "https://www.jis.com",
    },
  ],
};

export default sponsors;
