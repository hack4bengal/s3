import React from "react";

const SingleMentors = ({ mentor }) => {
  return (
    <>
      <div className="nft">
        <div className="main">
          <img className="tokenImage" src={mentor?.image} alt="NFT" />
          <div className="mentor__info">
            <h2>{mentor?.name}</h2>
            <p className="description">{mentor?.designation}</p>
            <p className="description">{mentor?.company}</p>
          </div>
          <hr />
          <div className="mentor__social_wrapper">
            <a href={mentor?.twitter} target="_blank" rel="noopener noreferrer">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
              </svg>
            </a>

            <a
              href={mentor?.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleMentors;
