import './TeamCard.scss';


const TeamCard = ({ img, imgAlt, name, title, linkedIn, twitter, linkedInIcon, twitterIcon }) => {
    return (
        <>
            <div className='team__card__container'>
                <img className='team__card__img' src={img} alt={imgAlt} />
                <span className='team__card__name'>
                    {name}
                </span>
                <div>
                    <span className='team__card__title'>
                        {title}
                    </span>
                    <div className='team__card__social__icon__container'>
                        <a href={linkedIn} target="_blank" rel="noreferrer">
                            <img src={linkedInIcon} alt="linkedIn" className='team__card__social__icon__linkedin' />
                        </a>
                        <a href={twitter} target="_blank" rel="noreferrer">
                            <img src={twitterIcon} alt="twitter" className='team__card__social__icon__twitter' />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}


export default TeamCard;



