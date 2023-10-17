import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import "./Venue.css"

const Venue = () => {
    return (
        <>
            <div className="hack4bengal__navbar-container">
                <Navbar />
            </div>

            <div className='venue_parent'>

                <h1>Landing Zone</h1>
                <hr />
                <iframe src="https://snuniv.ac.in/assets/virtual-tour/index.html"
                    id='360'
                ></iframe >


                <h1>Location</h1>
                <hr />
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58945.32562898916!2d88.34148479060923!3d22.576004369114994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027532681696e9%3A0xb8684bcdb918e91!2sSister%20Nivedita%20University!5e0!3m2!1sen!2sin!4v1686941980038!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" id='map'></iframe>


            </div>

        </>
    )
}

export default Venue