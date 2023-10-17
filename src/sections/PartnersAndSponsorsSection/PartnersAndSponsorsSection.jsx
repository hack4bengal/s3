import React from "react";
import sponsers from "../../assets/data/sponsersData";
import "./PartnersAndSponsorsSection.css";
import { motion } from "framer-motion";

import CommunityPartnersInfiniteCarousel from "../../components/CommunityPartnersInfiniteCarousel/CommunityPartnersInfiniteCarousel";
import { textAligns } from "dracula-ui";

const PartnersAndSponsorsSection = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1 } }}
        viewport={{ once: false }}
        className="hack4bengal__section6"
        id="sponsors"
      >
        <div
          className="hack4bengal__section6-body"
          style={{ maxWidth: "100%" }}
        >
          <div className="hack4bengal__section6-title">
            Partners And Sponsors
          </div>
          <hr />
          <div className="hack4bengal__section6-content">
            On behalf of the Hack4Bengal team, we would like to extend our
            heartfelt gratitude to the partners and sponsors who will be
            generously supporting us for the upcoming event. Their valuable
            contributions will play an instrumental role in ensuring the smooth
            running of the event, and we look forward to their support.
          </div>
          <div className="hack4bengal__section6-sponsers">
            <div
              className="hack4bengal__section6-sponser-title"
              style={{ marginBottom: "-40px" }}
            >
              In Collaboration With
            </div>
            <div className="hack4bengal__section6-sponser-list platinum">
              <div className="hack4bengal__section6-sponser-image">
                {sponsers.collaborators.map((sponser, index) => (
                  <a href={sponser.link}>
                    <img key={index} src={sponser.img} alt="h4b" />
                    <div style={{ textAlign: "center" }}>
                      <p>
                        {sponser.txt.split("\n").map((line, index) => (
                          <React.Fragment key={index}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div
              className="two-group-class platinumdiv"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="hack4bengal__section6-sponser-title sponser-two-dual">
                Title Sponsor
              </div>
              <div className="hack4bengal__section6-sponser-list platinum">
                <div className="hack4bengal__section6-sponser-image">
                  {sponsers.title.map((sponser, index) => (
                    <a href={sponser.link}>
                      <img
                        style={{
                          width: "220px",
                          height: "100px",
                          objectFit: "contain",
                        }}
                        key={index}
                        src={sponser.img}
                        alt={sponser.alt}
                      />
                      <div style={{ textAlign: "center" }}>
                        <p style={{ paddingTop: "2px" }}>
                          {sponser.txt.split("\n").map((line, index) => (
                            <React.Fragment key={index}>{line}</React.Fragment>
                          ))}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="two-group-class platinumdiv"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="hack4bengal__section6-sponser-title sponser-two-dual">
                Platinum Sponsor
              </div>
              <div className="hack4bengal__section6-sponser-list platinum">
                <div className="hack4bengal__section6-sponser-image">
                  {sponsers.platinum.map((sponser, index) => (
                    <a href={sponser.link}>
                      <img
                        style={{
                          width: "220px",
                          height: "100px",
                          objectFit: "contain",
                        }}
                        key={index}
                        src={sponser.img}
                        alt={sponser.alt}
                      />
                      <div style={{ textAlign: "center" }}>
                        <p style={{ paddingTop: "2px" }}>
                          {sponser.txt.split("\n").map((line, index) => (
                            <React.Fragment key={index}>{line}</React.Fragment>
                          ))}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="two-group-class"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="hack4bengal__section6-sponser-title sponser-two-dual">
                Gold Sponsor
              </div>
              <div
                className="hack4bengal__section6-sponser-list gold"
                style={{ width: "900px" }}
              >
                <div className="hack4bengal__section6-sponser-image-track">
                  {sponsers.gold.map((sponser, index) => (
                    <a href={sponser.link}>
                      <img
                        style={{
                          width: "220px",
                          height: "100px",
                          objectFit: "contain",
                        }}
                        key={index}
                        src={sponser.img}
                        alt={sponser.alt}
                      />
                      <div style={{ textAlign: "center" }}>
                        <p style={{ paddingTop: "2px" }}>
                          {sponser.txt.split("\n").map((line, index) => (
                            <React.Fragment key={index}>{line}</React.Fragment>
                          ))}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div
              className="two-group-class"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="hack4bengal__section6-sponser-title sponser-two-dual">
                Silver Sponsor
              </div>
              <div
                className="hack4bengal__section6-sponser-list platinum silver"
                style={{ width: "900px" }}
              >
                <div className="hack4bengal__section6-sponser-image-track">
                  {sponsers.silver.map((sponser, index) => (
                    <a href={sponser.link}>
                      <img
                        style={{
                          width: "220px",
                          height: "100px",
                          objectFit: "contain",
                        }}
                        key={index}
                        src={sponser.img}
                        alt={sponser.alt}
                      />
                      <div style={{ textAlign: "center" }}>
                        <p style={{ paddingTop: "2px" }}>
                          {sponser.txt.split("\n").map((line, index) => (
                            <React.Fragment key={index}>{line}</React.Fragment>
                          ))}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            {/* </div> */}

            {/* bronze partners */}
            <div className="partner-two-group">
              <div
                className="two-group-class w-550"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="hack4bengal__section6-sponser-title sponser-two-dual">
                  Bronze Sponsor
                </div>
                <div
                  className="hack4bengal__section6-sponser-list bronze"
                  style={{ width: "800px" }}
                >
                  <div className="hack4bengal__section6-sponser-image-track">
                    {sponsers.bronze.map((sponser, index) => (
                      <a href={sponser.link}>
                        <img
                          key={index}
                          src={sponser.img}
                          style={{
                            width:
                              index === 2
                                ? "190px"
                                : sponser.chotu
                                ? "140px"
                                : " 220px",
                          }}
                          alt={sponser.alt}
                        />
                        <div style={{ textAlign: "center" }}>
                          <p
                            style={{
                              paddingTop: "2px",
                              marginBottom: index === 2 ? "10.8px" : "",
                            }}
                          >
                            {sponser.txt.split("\n").map((line, index) => (
                              <React.Fragment key={index}>
                                {line}
                              </React.Fragment>
                            ))}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* bronze partners end*/}

            {/*Web3 Ecosystem Partner*/}
            <div className="partner-two-group">
              <div
                className="two-group-class w-550"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="hack4bengal__section6-sponser-title sponser-two-dual">
                  Web3 Ecosystem Partner
                </div>
                <div
                  className="hack4bengal__section6-sponser-list bronze"
                  style={{ width: "800px" }}
                >
                  <div className="hack4bengal__section6-sponser-image">
                    {sponsers.web3EcosystemPartners.map((sponser, index) => (
                      <a href={sponser.link}>
                        <img
                          key={index}
                          src={sponser.img}
                          // style={{width: index === 2 ? "190px" : " 220px"}}

                          // fixingTheHeightOfTheImage
                          style={{
                            width: "220px",
                            height: "100px",
                            objectFit: "contain",
                          }}
                          alt={sponser.alt}
                        />
                        <div style={{ textAlign: "center" }}>
                          <p
                            style={{
                              paddingTop: "2px",
                              marginBottom: index === 2 ? "10.8px" : "",
                            }}
                          >
                            {sponser.txt.split("\n").map((line, index) => (
                              <React.Fragment key={index}>
                                {line}
                              </React.Fragment>
                            ))}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/*Web3 Ecosystem Partner END*/}

            <div className="partner-two-group">
              <div
                className="two-group-class"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="hack4bengal__section6-sponser-title sponser-two-dual">
                  Digital Media Partner
                </div>
                <div className="hack4bengal__section6-sponser-list platinum">
                  <div className="hack4bengal__section6-sponser-image">
                    {sponsers.media.map((sponser, index) => (
                      <a href={sponser.link}>
                        <img
                          style={{ borderRadius: "20px" }}
                          key={index}
                          src={sponser.img}
                        />
                        <div style={{ textAlign: "center" }}>
                          <p style={{ paddingTop: "2px" }}>
                            {sponser.txt.split("\n").map((line, index) => (
                              <React.Fragment key={index}>
                                {line}
                              </React.Fragment>
                            ))}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div
                className="two-group-class"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="hack4bengal__section6-sponser-title sponser-two-dual">
                  Domain Partner
                </div>
                <div className="hack4bengal__section6-sponser-list platinum">
                  <div className="hack4bengal__section6-sponser-image">
                    {sponsers.domain.map((sponser, index) => (
                      <a href={sponser.link}>
                        <img
                          style={{ borderRadius: "20px", width: "158px" }}
                          key={index}
                          src={sponser.img}
                          alt={""}
                        />
                        <div style={{ textAlign: "center" }}>
                          <p style={{ paddingTop: "2px" }}>
                            {sponser.txt.split("\n").map((line, index) => (
                              <React.Fragment key={index}>
                                {line}
                              </React.Fragment>
                            ))}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="partner-two-group">
              <div
                className="two-group-class"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="hack4bengal__section6-sponser-title sponser-two-dual">
                  Energy Partner
                </div>
                <div className="hack4bengal__section6-sponser-list platinum">
                  <div className="hack4bengal__section6-sponser-image">
                    {sponsers.energy.map((sponser, index) => (
                      <a href={sponser.link}>
                        <img
                          style={{
                            borderRadius: "20px",
                            width: "240px",
                            height: "100px",
                            objectFit: "contain",
                          }}
                          key={index}
                          src={sponser.img}
                          alt={sponser.alt || ""}
                        />
                        <div style={{ textAlign: "center" }}>
                          <p style={{ paddingTop: "2px" }}>
                            {sponser.txt.split("\n").map((line, index) => (
                              <React.Fragment key={index}>
                                {line}
                              </React.Fragment>
                            ))}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div
                className="two-group-class"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="hack4bengal__section6-sponser-title sponser-two-dual">
                  Social Media Partner
                </div>
                <div className="hack4bengal__section6-sponser-list platinum">
                  <div className="hack4bengal__section6-sponser-image">
                    {sponsers.social.map((sponser, index) => (
                      <a href={sponser.link}>
                        <img
                          style={{ borderRadius: "20px", width: "100px" }}
                          key={index}
                          src={sponser.img}
                          alt={sponser.alt || ""}
                        />
                        <div style={{ textAlign: "center" }}>
                          <p style={{ paddingTop: "2px" }}>
                            {sponser.txt.split("\n").map((line, index) => (
                              <React.Fragment key={index}>
                                {line}
                              </React.Fragment>
                            ))}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="partner-two-group">
              <div
                className="two-group-class w-550"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="hack4bengal__section6-sponser-title sponser-two-dual">
                  Track Partner
                </div>
                <div
                  className="hack4bengal__section6-sponser-list platinum"
                  style={{ width: "800px" }}
                >
                  <div className="hack4bengal__section6-sponser-image-track">
                    {sponsers.trackpartner.map((sponser, index) => (
                      <a href={sponser.link}>
                        <img
                          style={{
                            borderRadius: "20px",
                            width: "220px",
                            height: "100px",
                            objectFit: "contain",
                          }}
                          key={index}
                          src={sponser.img}
                          alt={sponser.alt || ""}
                        />
                        <div style={{ textAlign: "center" }}>
                          <p>
                            {sponser.txt.split("\n").map((line, index) => (
                              <React.Fragment key={index}>
                                {line}
                              </React.Fragment>
                            ))}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div
              className="two-group-class"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="hack4bengal__section6-sponser-title sponser-two-dual">
                Certificate Partner
              </div>
              <div className="hack4bengal__section6-sponser-list gold">
                <div className="hack4bengal__section6-sponser-image">
                  {sponsers.certificatepartner.map((sponser, index) => (
                    <a href={sponser.link}>
                      <img
                        style={{
                          width: "220px",
                          height: "100px",
                          objectFit: "contain",
                        }}
                        key={index}
                        src={sponser.img}
                        alt={sponser.alt || ""}
                      />
                      <div style={{ textAlign: "center" }}>
                        <p style={{ paddingTop: "2px" }}>
                          {sponser.txt.split("\n").map((line, index) => (
                            <React.Fragment key={index}>{line}</React.Fragment>
                          ))}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="two-group-class "
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <div className="hack4bengal__section6-sponser-title sponser-two-dual ">
                In-Kind Sponsor
              </div>
              <div className="hack4bengal__section6-sponser-list platinum ">
                <div className="hack4bengal__section6-sponser-image inkind_logos_parent">
                  {sponsers.inkind.map((sponser, index) => (
                    <a href={sponser.link}>
                      <img
                        style={{
                          borderRadius: "20px",
                          width: "200px",
                          height: "100px",
                          objectFit: "contain",
                        }}
                        key={index}
                        src={sponser.img}
                        alt={sponser.alt || ""}
                      />
                      <div style={{ textAlign: "center" }}>
                        <p style={{ paddingTop: "2px" }}>
                          {sponser.txt.split("\n").map((line, index) => (
                            <React.Fragment key={index}>{line}</React.Fragment>
                          ))}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <h2 style={{ textAlign: "center" }}>
              More Sponsors To be Declared Soon
            </h2>

            <div
              className="hack4bengal__section6-content"
              style={{ marginTop: "50px", fontWeight: "bold" }}
            >
              Want to sponsor us? <br />
              <a
                href="https://forms.gle/Y77QCcKmMAMpPAmQ9"
                className="link-us-sponsor"
                style={{ color: "#E13B3C" }}
              >
                Contact us
              </a>
            </div>

            {/* CommunityPartnersSection */}

            <div
              className="two-group-class "
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <div className="hack4bengal__section6-sponser-title sponser-two-dual ">
                Community Partners
              </div>
              <div className="hack4bengal__section6-sponser-list platinum ">
                <div className="hack4bengal__section6-sponser-image inkind_logos_parent">
                  {sponsers.communityPartners.map((sponser, index) => (
                    <a href={sponser.link}>
                      <img
                        style={{
                          // borderRadius: "20px",
                          width: "200px",
                          height: "100px",
                          objectFit: "contain",
                        }}
                        key={index}
                        src={sponser.img}
                        alt={sponser.alt || ""}
                      />
                      <div style={{ textAlign: "center" }}>
                        <p style={{ paddingTop: "2px" }}>
                          {sponser.txt.split("\n").map((line, index) => (
                            <React.Fragment key={index}>{line}</React.Fragment>
                          ))}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* CommunityPartnersSectionCarousel */}

            {/* <div
              className="two-group-class "
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                overflow: "hidden", //toLimmitOverflowingOfCarousel
              }}
            >
              <div className="hack4bengal__section6-sponser-title sponser-two-dual ">
                Community Partners
              </div>

              <CommunityPartnersInfiniteCarousel />
            </div> */}

            {/* CommunityPartnersSectionCarouselEND */}
          </div>

          {/* CommunityPartnersSection END */}
        </div>
      </motion.div>
    </>
  );
};

export default PartnersAndSponsorsSection;
