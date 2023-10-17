import React from "react";
import "./TestimonialSection.css";
import testimonials from "../../assets/data/testimonialData";
import TestimonialCard from "../../components/TestimonialCard/TestimonialCard";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { sliderSettingsforTestimonials } from "../../motionUtils";

const TestimonialSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
      viewport={{ once: false }}
      className="judges_section"
      id="testimonials"
    >
      <div className="testimonialsection_parent" style={{ maxWidth: '100%' }}>
        <div className="judges_section_title">Testimonials</div>
        <hr />
        <div className="judges_section_container">
          <Slider {...sliderSettingsforTestimonials} className="slider">
            {testimonials.map((testimonial, key) => (
              <TestimonialCard
                index={key}
                img={testimonial.img}
                name={testimonial.name}
                position={testimonial.position}
                description={testimonial.description}
                facebook={testimonial.facebook}
                twitter={testimonial.twitter}
                linkedin={testimonial.linkedin}
                github={testimonial.github}
                youtube={testimonial.youtube}
                testimonial={testimonial.testimonial}
              />
            ))}
          </Slider>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialSection;
