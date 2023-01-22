import Link from "next/link";
import React, { useState } from "react";
import classes from "./Navbar.module.css";
import { motion } from "framer-motion";
import useScroll from "../useScroll";
import { navAnimation } from "../Animations";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [element, controls] = useScroll();
  const [showMenu, setShowMenu] = useState(false);
  return (
    <motion.div
      className={classes.container}
      ref={element}
      animate={controls}
      variants={navAnimation}
      transition={{ delay: 0.1, ease: "easeOut" }}
    >
      <div className={classes.logoContainer}>
        <h2 className={classes.logo}>Blush Beauty</h2>
      </div>
      <div className={classes.menuIcon}>
          <HiMenu size={25} color="white" onClick={() => setShowMenu(true)} />
        </div>
      <div className={classes.linksContainer}>
        <div>
          <Link href={"#"}>
            <a className={classes.navLink}>Home</a>
          </Link>
        </div>
        <div>
          <Link href={"#services"}>
            <a className={classes.navLink}>Services</a>
          </Link>
        </div>
        <div>
          <Link href={"#portfolio"}>
            <a className={classes.navLink}>Portfolio</a>
          </Link>
        </div>
        <div>
          <Link href={"#blog"}>
            <a className={classes.navLink}>Blog</a>
          </Link>
        </div>
        <div>
          <Link href={"#skills"}>
            <a className={classes.navLink}>Skills</a>
          </Link>
        </div>
        <div>
          <Link href={"#contact"}>
            <a className={classes.navLink}>Contact</a>
          </Link>
        </div>
      </div>
      {showMenu && <div className={classes.menuContainer}>
        <div className={classes.closeIconContainer}>
          <AiOutlineClose size={25} color='white' onClick={()=>setShowMenu(false)}/>
        </div>
        <div className={classes.backDrop}/>
        <div className={classes.menuLinksContainer}>
          <Link href={"#"}>
            <a className={classes.menuLink}>Home</a>
          </Link>
          <Link href={"#services"}>
            <a className={classes.menuLink}>Services</a>
          </Link>
          <Link href={"#portfolio"}>
            <a className={classes.menuLink}>Portfolio</a>
          </Link>
          <Link href={"#blog"}>
            <a className={classes.menuLink}>Blog</a>
          </Link>
          <Link href={"#skills"}>
            <a className={classes.menuLink}>Skills</a>
          </Link>
          <Link href={"#contact"}>
            <a className={classes.menuLink}>Contact</a>
          </Link>
        </div>
      </div>}
    </motion.div>
  );
};

export default Navbar;
