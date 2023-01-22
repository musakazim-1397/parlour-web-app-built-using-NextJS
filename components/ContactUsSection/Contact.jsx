import React from "react";
import classes from "./Contact.module.css";
import { motion } from "framer-motion";
import useVerticalScroll from "../useVerticalScroll";
import { contactSectionAnimation } from "../Animations";
const Contact = () => {
  const [element, controls] = useVerticalScroll();

  return (
    <motion.div
      className={classes.container}
      ref={element}
      animate={controls}
      variants={contactSectionAnimation}
      transition={{ ease: "easeOut" }}
    >
      <div className={classes.contactRotatedTitle}>
        <h1 className={classes.title}>CONTACT</h1>
      </div>
      <div className={classes.leftSide}>
        <span className={classes.subHeading}>STAY IN TOUCH WITH ME</span>
        <h1 className={classes.heading}>Quick Contact</h1>
        <h1 className={classes.sayHi}>Just to say hi !!</h1>
        <p className={classes.qtnText}>
          if you have any questions simply use the following contact details.
        </p>
        <p className={classes.furtherText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className={classes.address}>
          <strong>ADDRESS:</strong>
          <span className={classes.addressDetail}>33, Flyover Road,</span>
        </div>
        <div className={classes.address}>
          <strong>EMAIL:</strong>
          <span className={classes.addressDetail}>blushb@gmail.com</span>
        </div>
        <div className={classes.address}>
          <strong>WEBSITE:</strong>
          <span className={classes.addressDetail}>www.blushbeauty.com</span>
        </div>
      </div>
      <div className={classes.rightSide}>
        <form className={classes.form}>
          <input className={classes.input} placeholder="NAME" />
          <input className={classes.input} placeholder="EMAIL" />
          <textarea
            className={classes.textArea}
            rows={7}
            placeholder="MESSAGE"
          />
          <button className={classes.btn}>SEND MESSAGE</button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
