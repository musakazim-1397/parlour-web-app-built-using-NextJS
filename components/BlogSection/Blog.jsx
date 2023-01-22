import Image from "next/image";
import React from "react";
import classes from "./Blog.module.css";
import { motion } from "framer-motion";
import useScroll from "../useScroll";
import { blogSectionAnimation } from "../Animations";

const Blog = () => {
  const [element, controls] = useScroll();

  return (
    <motion.div
      className={classes.container}
      ref={element}
      animate={controls}
      variants={blogSectionAnimation}
      transition={{ delay: 0.1, ease: "easeOut"}}
    >
      <div className={classes.blogRotatedTitle}>
        <h1 className={classes.title}>BLOG</h1>
      </div>
      <div className={classes.blogContent}>
        <div className={classes.blog}>
          <div className={classes.blogImage}>
            <Image src={"/assets/home.png"} layout="fill" objectFit="contain" />
          </div>
          <div className={classes.blogInfo}>
            <h2 className={classes.blogTitle}>Parlour Journal</h2>
            <p className={classes.subTitle}>SPA</p>
            <p className={classes.description}>
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

        <div className={classes.blog}>
          <div className={classes.blogImage}>
            <Image src={"/assets/home.png"} layout="fill" objectFit="contain" />
          </div>
          <div className={classes.blogInfo}>
            <h2 className={classes.blogTitle}>reflexology sky</h2>
            <p className={classes.subTitle}>SPA</p>
            <p className={classes.description}>
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

        <div className={classes.blog}>
          <div className={classes.blogImage}>
            <Image src={"/assets/home.png"} layout="fill" objectFit="contain" />
          </div>
          <div className={classes.blogInfo}>
            <h2 className={classes.blogTitle}>meditation sun</h2>
            <p className={classes.subTitle}>SPA</p>
            <p className={classes.description}>
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

export default Blog;
