import React from "react";
import classes from "./Performance.module.css";
import { motion } from "framer-motion";
import useVerticalScroll from "../useVerticalScroll";
import { pricingSectionAnimation } from "../Animations";
const Performance = () => {
  const [element, controls] = useVerticalScroll();

  return (
    <motion.div
      className={classes.container}
      ref={element}
      animate={controls}
      variants={pricingSectionAnimation}
      transition={{ delay: 0.1, ease: "easeOut", staggerChildren: 0.2 }}
    >
      <div
        className={classes.headerSection}
      >
        <span className={classes.subHeading}>OUR SKILLS</span>
        <h1 className={classes.mainHeading}>Check our super awesome skills</h1>
      </div>
      <div
        className={classes.performanceContainer}
      >
        <div className={classes.leftSide}>
          <div className={classes.progressContainer}>
            <div className={classes.vertical}>
              <progress
                className={classes.progrss}
                max={100}
                value={75}
              ></progress>
              <span className={classes.progressName}>FACIAL</span>
            </div>
            <span className={classes.percentage}>75%</span>
          </div>
          <div className={classes.progressContainer}>
            <div className={classes.vertical}>
              <progress
                className={classes.progrss}
                max={100}
                value={50}
              ></progress>
              <span className={classes.progressName}>SKIN</span>
            </div>
            <span className={classes.percentage}>50%</span>
          </div>
          <div className={classes.progressContainer}>
            <div className={classes.vertical}>
              <progress
                className={classes.progrss}
                max={100}
                value={90}
              ></progress>
              <span className={classes.progressName}>SPA</span>
            </div>
            <span className={classes.percentage}>90%</span>
          </div>
          <div className={classes.progressContainer}>
            <div className={classes.vertical}>
              <progress
                className={classes.progrss}
                max={100}
                value={70}
              ></progress>
              <span className={classes.progressName}>COSMETIC</span>
            </div>
            <span className={classes.percentage}>70%</span>
          </div>
          <div className={classes.progressContainer}>
            <div className={classes.vertical}>
              <progress
                className={classes.progrss}
                max={100}
                value={90}
              ></progress>
              <span className={classes.progressName}>SALON</span>
            </div>
            <span className={classes.percentage}>90%</span>
          </div>
        </div>
        <div className={classes.rightSide}>
          <p className={classes.rightSidePara}>Beauty services and products</p>
          <p className={classes.rightSidePara}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Performance;
