import Image from "next/image";
import React from "react";
import classes from "./Hero.module.css";
import { motion } from "framer-motion";
import useScroll from "../useScroll";
import { homeAnimations, homeInfoAnimation } from "../Animations";

const Hero = () => {
  const [element, controls] = useScroll();

  return (
    <div className={classes.container}>
      <motion.div
        className={classes.leftSide}
        ref={element}
        animate={controls}
        variants={homeAnimations}
        transition={{ delay: 0.1, ease: "easeOut" }}
      >
        <h1 className={classes.mainHeading}>Blush Beauty Parlour</h1>
        <p className={classes.subText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className={classes.playBtn}>
          <Image
            src={"/assets/play.png"}
            alt="play"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </motion.div>
      <motion.div
        className={classes.rightBottomSide}
        ref={element}
        animate={controls}
        variants={homeInfoAnimation}
        transition={{ delay: 0.1, ease: "easeOut" }}
      >
        <div className={classes.col}>
          <strong>Parlour</strong>
          <p>Blossoms Academy</p>
        </div>
        <div className={classes.col}>
          <strong>Email</strong>
          <p>blossoms@gmail.com</p>
        </div>
        <div className={classes.col}>
          <strong>Mobile</strong>
          <p>+91 8897666511</p>
        </div>
        <div className={classes.col}>
          <strong>Address</strong>
          <p>322, Long Fly,</p>
          <p>997773 India</p>
        </div>
        <div className={classes.col}>
          <strong>Services</strong>
          <p>Sparking</p>
          <p>SPA Cream</p>
        </div>
        <div className={classes.col}>
          <strong>Working Hours</strong>
          <p>Monday to Friday</p>
          <p>08:00 to 09:00</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
