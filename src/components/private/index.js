import { lazy } from "react";

export const Landing = lazy(() => import("./landing/Landing"));
export const Marquee = lazy(() => import("./marquee/Marquee"));
export const About = lazy(() => import("./about/About"));
export const Timeline = lazy(() => import("./timeline/Timeline"));
export const Timer = lazy(() => import("./timer/Timer"));
export const Theme = lazy(() => import("./themes/Theme"));
export const Prizes = lazy(() => import("./prizes/Prizes"));
export const Sponsors = lazy(() => import("./sponsors/Sponsors"));
export const SingleSponsors = lazy(() =>
  import("./sponsors/singlesponsors/SingleSponsors")
);
export const Collaborators = lazy(() =>
  import("./collaborators/Collaborators")
);
export const Mentors = lazy(() => import("./mentors/Mentors"));
export const Testimonials = lazy(() => import("./testimonials/Testimonials"));
export const FAQ = lazy(() => import("./faq/FAQ"));
export const TeamCard = lazy(() => import("./teamCard/TeamCard"));
