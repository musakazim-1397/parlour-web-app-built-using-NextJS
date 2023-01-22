import Image from "next/image";
import React from "react";
import classes from "./Services.module.css";
import { motion } from "framer-motion";
import useScroll from "../useScroll";
import { servicesAnimation } from "../Animations";

const Services = () => {
  const [element, controls] = useScroll();

  return (
    <motion.div
      className={classes.container}
      ref={element}
      animate={controls}
      variants={servicesAnimation}
      transition={{ delay: 0.1, ease: "easeOut" }}
      
    >
      <div className={classes.servicesHeadingContainer}>
        <h1 className={classes.rotatedHeading}>Services</h1>
      </div>
      <div className={classes.servicesContainer}>
        <div className={classes.service}>
          <div className={classes.serviceImageContainer}>
            <Image
              src={"/assets/service1.png"}
              alt="services"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className={classes.serviceTextContainer}>
            <p className={classes.serviceNumber}>01</p>
            <h1 className={classes.serviceName}>Blowout</h1>
            <p className={classes.servicePara}>
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
          </div>
        </div>
        <div className={classes.service}>
          <div
            className={classes.serviceImageContainer}
            style={{ marginLeft: "-23px" }}
          >
            <Image
              src={"/assets/service2.png"}
              alt="services"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className={classes.serviceTextContainer}>
            <p className={classes.serviceNumber}>02</p>
            <h1 className={classes.serviceName}>Olaplex</h1>
            <p className={classes.servicePara}>
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
          </div>
        </div>
        <div className={classes.service}>
          <div className={classes.serviceImageContainer}>
            <Image
              src={"/assets/service3.png"}
              alt="services"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className={classes.serviceTextContainer}>
            <p className={classes.serviceNumber}>03</p>
            <h1 className={classes.serviceName}>Retouch</h1>
            <p className={classes.servicePara}>
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
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
