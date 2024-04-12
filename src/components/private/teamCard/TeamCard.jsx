import "./TeamCard.scss";

const TeamCard = ({ img, imgAlt, name, title, twitter, linkedIn }) => {
  return (
    <>
      <div className="team__card">
        <img src={img} alt={name} />

        <div className="content">
          <h2>{name}</h2>
          <h3>{title}</h3>

          <div className="socials">
            <a
              href={linkedIn}
              target="_blank"
              rel="noreferrer"
              className="linkedin"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#ffffff"
                height="1.2rem"
                width="1.2rem"
                viewBox="0 0 448 512"
              >
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
              </svg>
            </a>

            <a href={twitter} target="_blank" rel="noreferrer">
              <svg
                aria-label="Twitter"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1.2rem"
                width="1.2rem"
                color="#ffffff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
