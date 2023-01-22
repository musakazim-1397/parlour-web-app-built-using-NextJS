import Image from "next/image";
import React from "react";
import classes from "./Images.module.css";
import { motion } from "framer-motion";
import useScroll from "../useScroll";
import { ImagesSectionAnimation } from "../Animations";

const Images = () => {
  const [element, controls] = useScroll();
  return (
    <div className={classes.container}>
      <motion.div
        className={classes.img1}
        ref={element}
        animate={controls}
        variants={ImagesSectionAnimation}
        transition={{ delay: 0.1, ease: "easeOut" }}
      >
        <Image src={"/assets/portfolio3.jpg"} layout="fill" objectFit="cover" />
      </motion.div>
      <motion.div
        className={classes.img2}
        ref={element}
        animate={controls}
        variants={ImagesSectionAnimation}
        transition={{ delay: 0.1, ease: "easeOut" }}
      >
        <Image src={"/assets/portfolio4.jpg"} layout="fill" objectFit="cover" />
      </motion.div>
      <motion.div
        className={classes.img3}
        ref={element}
        animate={controls}
        variants={ImagesSectionAnimation}
        transition={{ delay: 0.1, ease: "easeOut" }}
      >
        <Image src={"/assets/portfolio5.jpg"} layout="fill" objectFit="cover" />
      </motion.div>
      <motion.div
        className={classes.img4}
        ref={element}
        animate={controls}
        variants={ImagesSectionAnimation}
        transition={{ delay: 0.1, ease: "easeOut" }}
      >
        <Image
          src={"/assets/portfolio10.jpg"}
          layout="fill"
          objectFit="cover"
        />
      </motion.div>
      <motion.div
        className={classes.img5}
        ref={element}
        animate={controls}
        variants={ImagesSectionAnimation}
        transition={{ delay: 0.1, ease: "easeOut" }}
      >
        <Image src={"/assets/portfolio7.jpg"} layout="fill" objectFit="cover" />
      </motion.div>
      <motion.div
        className={classes.img6}
        ref={element}
        animate={controls}
        variants={ImagesSectionAnimation}
        transition={{ delay: 0.1, ease: "easeOut" }}
      >
        <Image src={"/assets/portfolio8.jpg"} layout="fill" objectFit="cover" />
      </motion.div>
      <motion.div
        className={classes.img7}
        ref={element}
        animate={controls}
        variants={ImagesSectionAnimation}
        transition={{ delay: 0.1, ease: "easeOut" }}
      >
        <Image src={"/assets/portfolio9.jpg"} layout="fill" objectFit="cover" />
      </motion.div>
      <motion.div
        className={classes.img8}
        ref={element}
        animate={controls}
        variants={ImagesSectionAnimation}
        transition={{ delay: 0.1, ease: "easeOut" }}
      >
        <Image src={"/assets/portfolio6.jpg"} layout="fill" objectFit="cover" />
      </motion.div>
    </div>
  );
};

export default Images;
