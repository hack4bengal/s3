import Navbar from "../../components/navbar/Navbar";
import NavbarTeam from "../../components/navbarTeam/NavbarTeam";
import "./codeofConduct.css";
import Footer from "../../components/footer/Footer";

export default function CodeofConduct() {
  return (
    <div>


      <div className="hack4bengal__navbar-container">
        <Navbar />
      </div>

      <div className="privacy">
        <div className="privacy_2">
          <h2 style={{ textAlign: "center" }}>Code of Conduct</h2>
          <hr />
          <p className="bold">
            By participating in Hack4Bengal hackathon, all participants agree
            to abide by this Code of Conduct. Failure to comply with this Code
            of Conduct may result in disqualification and expulsion from the
            event, and may also lead to legal action in severe cases.
          </p>
          <p>
            {" "}
            <span className="bold">Respect</span>: All participants must
            respect each other's opinions, beliefs, and values. Discriminatory
            language or behavior will not be tolerated. This includes, but is
            not limited to, sexism, racism, homophobia, and ableism.
          </p>
          <p>
            {" "}
            <span className="bold">Collaboration</span>: Participants should
            embrace collaboration and teamwork. Any attempts to sabotage or
            undermine other teams' work will not be tolerated.
          </p>
          <p>
            {" "}
            <span className="bold">Privacy</span>: Participants must respect
            the privacy of others. Any confidential information shared during
            the hackathon must not be disclosed without the express consent of
            the person or team that shared it.
          </p>
          <p>
            {" "}
            <span className="bold">Professionalism</span>: Participants should
            conduct themselves in a professional manner throughout the
            hackathon. This includes dressing appropriately, refraining from
            using inappropriate language, and refraining from engaging in any
            behavior that would be considered unprofessional.
          </p>
          <p>
            {" "}
            <span className="bold">Safety</span>: Participants should
            prioritize their safety and the safety of others throughout the
            hackathon. Any behavior that puts others in danger, including but
            not limited to physical violence or verbal threats, will not be
            tolerated.{" "}
          </p>
          <p>
            <span className="bold">Code of Conduct Violations</span>: Any
            participant who violates the Code of Conduct may be subject to
            disciplinary action, up to and including expulsion from the
            hackathon. All participants have the right to report any Code of
            Conduct violations to the event organizers.
          </p>
          <p>
            <span className="bold">Inclusivity</span>: The hackathon should be
            inclusive to all individuals regardless of gender, ethnicity,
            race, religion, age, or any other characteristic. All participants
            should work towards creating a safe and welcoming environment for
            everyone involved.
          </p>
          <p>
            <span className="bold">Intellectual Property</span>: Participants
            should respect the intellectual property rights of others. Any use
            of copyrighted or trademarked material must be properly attributed
            or cleared for use.
          </p>
          <p>
            <span className="bold">Compliance with Laws</span>: All
            participants must comply with all applicable laws and regulations
            throughout the hackathon. Any illegal activities will not be
            tolerated.
          </p>
          <p>
            {" "}
            <span className="bold">Accountability</span>: All participants are
            accountable for their own actions and should take responsibility
            for any consequences that may arise from those actions.
          </p>
          <h2 className="reporting_breach_header">Reporting a Breach</h2>
          <hr />
          <p>
            {" "}
            <p>
              If you experience or witness a breach of the Hack4Bengal Code of
              Conduct, we encourage you to report it immediately. You can
              report it in the following ways:
            </p>
            <ul>
              <li style={{ paddingTop: "5px" }}>
                <span className="bold">
                  Speak with a member of the Hack4Bengal team
                </span>
                : You can approach any member of the team and share your
                concerns with them. They will take appropriate action to
                address the situation. The team of Hack4Bengal will be in
                proper t-shirts with the logo of Hack4Bengal on it, along with
                a lanyard and identity card.
              </li>
              <li style={{ paddingTop: "20px" }}>
                <span className="bold">Email the Hack4Bengal team</span>: You
                can send an email to the official Hack4Bengal email address
                <a href="mailto: hack4bengal@gmail.com ">
                  {" "}
                  hack4bengal@gmail.com{" "}
                </a>{" "}
                and describe the incident in detail. We will investigate the
                matter and take appropriate action.
              </li>
              <li style={{ paddingTop: "20px" }}>
                <span className="bold">
                  Contact the following Hack4Bengal Representatives
                </span>
                : If you prefer to tell us in person but the team is not near,
                call the lead organizers below:
                <ul style={{ listStyleType: "circle", marginLeft: "60px" }}>
                  <li>
                    Shubham Tribedi:{" "}
                    <a href="mailto:shubham@hack4bengal.tech">
                      {" "}
                      shubham@hack4bengal.tech
                    </a>{" "}
                  </li>

                  <li>
                    Sagnik Mitra:{" "}
                    <a href="mailto:sagnik@hack4bengal.tech">
                      {" "}
                      sagnik@hack4bengal.tech
                    </a>{" "}
                  </li>

                  <li>
                    Manish Kumar Barnwal:{" "}
                    <a href="mailto:manish@hack4bengal.tech">
                      {" "}
                      manish@hack4bengal.tech
                    </a>{" "}
                  </li>
                  <li>
                    Kajal Jaiswal:{" "}
                    <a href="mailto:kajalj181101@gmail.com">
                      {" "}
                      kajalj181101@gmail.com
                    </a>{" "}
                  </li>
                </ul>
              </li>{" "}
            </ul>
            <p style={{ paddingTop: "10px" }}>
              We take all reports of Code of Conduct breaches seriously and
              will take appropriate action to address the situation.
            </p>
            <p>
              Hack4Bengal reserves the right to amend or make exceptions or
              otherwise revise the policies either partially or fully. If you
              have any questions regarding the policies, please contact us at{" "}
              <a href="mailto:hack4bengal@gmail.com">hack4bengal@gmail.com</a>
              .
            </p>
          </p>
        </div>
      </div>
      <div className="hack4bengal__footer-container">
        <Footer />
      </div>
    </div>
  );
}
