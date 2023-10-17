import React from 'react'
import { motion } from "framer-motion";
import { Link, useNavigate } from 'react-router-dom';
import "./Venue.css"

const Venue = () => {

    const navigate = useNavigate();
    let element;

    const gotoId = (id) => {
        navigate("/venue");
        setTimeout(() => {
            element = document.getElementById(id);
            element.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 500);
    };


    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 1 } }}
                viewport={{ once: false }}
                className="hack4bengal__section2"
            >


                <div className="h4b_about_main">
                    <div id="venue">
                        <div >
                            <h1>Venue</h1>
                            <hr />

                            <div className="venue_description">
                                Sister Nivedita University (SNU), DG 1/2 New Town, Action Area 1, Kolkata - 700156

                                <div className='venue_buttondiv'>
                                    <div className='venue_button' onClick={() => {
                                        gotoId('360');
                                    }} >
                                        <button className="meetourteam_section-button">
                                            See venue in 360°
                                        </button>
                                    </div>
                                    <div className='venue_button' onClick={() => {
                                        gotoId('map');
                                    }} >
                                        <button className="meetourteam_section-button">
                                            View in Google Maps
                                        </button>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Venue