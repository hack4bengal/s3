import React, { useEffect } from "react";
import { breachContents, rules } from "../../assets/data/CocContent";
import renderEmailsInDescription from "../../utils/renderEmail";
import "./CodeofConduct.scss";

function CodeofConduct() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="coc">
      <h2 className="heading">Code of conduct</h2>

      <div className="coc__rules__centent">
        <p className="text__bold">
          By participating in Hack4Bengal hackathon, all participants agree to
          abide by this Code of Conduct. Failure to comply with this Code of
          Conduct may result in disqualification and expulsion from the event,
          and may also lead to legal action in severe cases.
        </p>

        {rules.map((rule, index) => {
          return (
            <p key={index} className="coc__rules">
              <span className="text__bold">{rule?.title}</span>
              {rule?.description}
            </p>
          );
        })}
      </div>

      <h2 className="heading">Reporting a Breach</h2>

      <div className="coc__reporting__content">
        <p>
          If you experience or witness a breach of the Hack4Bengal Code of
          Conduct, we encourage you to report it immediately. You can report it
          in the following ways:
        </p>

        <ul className="coc__reporting__list">
          {breachContents.contactInfos.map((branchCon, branchIndex) => {
            return (
              <li key={branchIndex}>
                <span className="text__bold">{branchCon.title}</span>
                {renderEmailsInDescription(branchCon.description)}
                <ul className="coc__repoting__emails">
                  {branchCon?.contactInformation?.map(
                    (contacts, contactIndex) => (
                      <li key={contactIndex}>
                        {contacts.name}{" "}
                        <a href={`mailto:${contacts.email}`}>
                          {contacts.email}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </li>
            );
          })}
        </ul>

        {breachContents.actions.map((action, index) => {
          return (
            <p key={index}>{renderEmailsInDescription(action.description)}</p>
          );
        })}
      </div>
    </section>
  );
}

export default CodeofConduct;
