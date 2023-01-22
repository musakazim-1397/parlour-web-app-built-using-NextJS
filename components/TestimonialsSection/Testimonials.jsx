import Image from "next/image";
import React, { useState } from "react";
import classes from "./Testimonials.module.css";
import { motion } from "framer-motion";
import useScroll from "../useScroll";
import { ImagesSectionAnimation } from "../Animations";

const testimonialsArray = [
  {
    name: "Julie Baker",
    work: "SPA",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    name: "Gabrellia",
    work: "Full Makeup",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
  },
  {
    name: "Natalia",
    work: "Skin",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
  },
];

const Testimonials = () => {
  const [showTestimonialOfIndex, setShowTestimonialOfIndex] = useState(0);
  const [element, controls]= useScroll();


  return (
    <motion.div className={classes.container} ref={element} animate={controls} variants={ImagesSectionAnimation} transition={{delay:0.1, ease:'easeOut'}}>
      <div className={classes.testimonial}>
        <div className={classes.testimonialImage}>
          <Image src={"/assets/loadmore.png"} width={50} height={50} />
        </div>
        <div className={classes.testimonialDetail}>
          <span>{testimonialsArray[showTestimonialOfIndex].work}</span>
          <p style={{ margin: "0.2rem 0", fontWeight: "bold" }}>
            {testimonialsArray[showTestimonialOfIndex].name}
          </p>
          <p>{testimonialsArray[showTestimonialOfIndex].message}</p>
        </div>
        <div className={classes.dotsContainer}>
          <div
            className={classes.dot}
            style={{
              backgroundColor:
                showTestimonialOfIndex === 0 ? "black" : "#c52440",
            }}
            onClick={() => setShowTestimonialOfIndex(0)}
          ></div>
          <div
            className={classes.dot}
            style={{
              backgroundColor:
                showTestimonialOfIndex === 1 ? "black" : "#c52440",
            }}
            onClick={() => setShowTestimonialOfIndex(1)}
          ></div>
          <div
            className={classes.dot}
            style={{
              backgroundColor:
                showTestimonialOfIndex === 2 ? "black" : "#c52440",
            }}
            onClick={() => setShowTestimonialOfIndex(2)}
          ></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
