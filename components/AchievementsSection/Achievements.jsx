import Image from "next/image";
import React from "react";
import classes from "./Achievements.module.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import useScroll from "../useScroll";
import { ImagesSectionAnimation } from "../Animations";

const Achievements = () => {
  const [element, controls] = useScroll();

  return (
    <div className={classes.container}>
      <motion.div
        className={classes.client}
        ref={element}
        animate={controls}
        variants={ImagesSectionAnimation}
        transition={{ delay: 0.1, ease: "easeOut" }}
      >
        <h1 className={classes.countingNumbers}>
          <CountUp start={100} end={877} duration={2.75} enableScrollSpy />
        </h1>
        <p className={classes.subHeading}>clients served</p>
        <div className={classes.imageContainer}>
          <Image
            src={"/assets/milestone1.png"}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </motion.div>
      <motion.div
        className={classes.client}
        ref={element}
        animate={controls}
        variants={ImagesSectionAnimation}
        transition={{ delay: 0.1, ease: "easeOut" }}
      >
        <h1 className={classes.countingNumbers}>
          <CountUp
            start={1.1}
            end={1.4}
            decimal="."
            decimals={1}
            suffix="M"
            duration={2.1}
            enableScrollSpy
          />
        </h1>
        <p className={classes.subHeading}>of raw data</p>
        <div className={classes.imageContainer}>
          <Image
            src={"/assets/milestone2.png"}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </motion.div>
      <motion.div
        className={classes.client}
        ref={element}
        animate={controls}
        variants={ImagesSectionAnimation}
        transition={{ delay: 0.1, ease: "easeOut" }}
      >
        <h1 className={classes.countingNumbers}>
          {" "}
          <CountUp
            start={3.0}
            end={5.4}
            decimal="."
            decimals={1}
            suffix="K"
            duration={2.75}
            enableScrollSpy
          />
        </h1>
        <p className={classes.subHeading}>reviews</p>
        <div className={classes.imageContainer}>
          <Image
            src={"/assets/milestone3.png"}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </motion.div>
      <div className={classes.backgroundImageContainer}>
        <Image
          src={"/assets/milestone-background.png"}
          width={450}
          height={500}
        />
      </div>
    </div>
  );
};

export default Achievements;
