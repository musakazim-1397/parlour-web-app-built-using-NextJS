import React from "react";
import classes from "./Pricing.module.css";
import { motion } from "framer-motion";
// import useScroll from "../useScroll";
import useVerticalScroll from "../useVerticalScroll";
import { pricingSectionAnimation } from "../Animations";

const Pricing = () => {
  const [element, controls] = useVerticalScroll();
  return (
    <motion.div
      className={classes.container} 
      ref={element}
      animate={controls}
      variants={pricingSectionAnimation}
      transition={{ delay: 0.1, ease: "easeOut" }}
    >
      <div className={classes.priceRotatedTitle}>
        <h1 className={classes.title}>PRICING</h1>
      </div>
      <div
        className={classes.mainHeading}
      >
        <p className={classes.subHeading}>find your pricing plan</p>
        <h1 className={classes.heading}>
          Fing the best salons in your city could be time consuming..
        </h1>
      </div>
      <div className={classes.priceContent}>
        <div className={classes.item}>
          <div className={classes.priceContainer}>
            <h2 className={classes.itemCategory}>Basic</h2>
            <div className={classes.priceAndDollarSignContainer}>
              <span className={classes.dollarsign}>$</span>
              <h1 className={classes.price}>13</h1>
            </div>
          </div>
          <div className={classes.itemsList}>
            <p className={classes.listItem}>Full Face Rs.250</p>
            <p className={classes.listItem}>Cheeks Rs.90</p>
            <p className={classes.listItem}>Jawline Rs.50</p>
            <p className={classes.listItem}>Lower Lip Rs.50</p>
            <p className={classes.listItem}>Upper Lip Rs.250</p>
            <p className={classes.listItem}>Under arms Rs.100</p>
            <p
              className={`${classes.listItem} ${classes.strikethroughListItem}`}
            >
              Full legs Rs.450
            </p>
            <p
              className={`${classes.listItem} ${classes.strikethroughListItem}`}
            >
              Half legs Rs.250
            </p>
            <p
              className={`${classes.listItem} ${classes.strikethroughListItem}`}
            >
              Daily Backups
            </p>
            <p
              className={`${classes.listItem} ${classes.strikethroughListItem}`}
            >
              One click setup
            </p>
          </div>
        </div>

        <div className={classes.item}>
          <div className={classes.priceContainer}>
            <h2 className={classes.itemCategory}>Pro</h2>
            <div className={classes.priceAndDollarSignContainer}>
              <span className={classes.dollarsign}>$</span>
              <h1 className={classes.price}>35</h1>
            </div>
          </div>
          <div className={classes.itemsList}>
            <p className={classes.listItem}>Full Face Rs.250</p>
            <p className={classes.listItem}>Cheeks Rs.90</p>
            <p className={classes.listItem}>Jawline Rs.50</p>
            <p className={classes.listItem}>Lower Lip Rs.50</p>
            <p className={classes.listItem}>Upper Lip Rs.250</p>
            <p className={classes.listItem}>Under arms Rs.100</p>
            <p className={`${classes.listItem} `}>Full legs Rs.450</p>
            <p className={`${classes.listItem} `}>Half legs Rs.250</p>
            <p
              className={`${classes.listItem} ${classes.strikethroughListItem}`}
            >
              Daily Backups
            </p>
            <p
              className={`${classes.listItem} ${classes.strikethroughListItem}`}
            >
              One click setup
            </p>
          </div>
        </div>

        <div className={classes.item}>
          <div className={classes.priceContainer}>
            <h2 className={classes.itemCategory}>Expert</h2>
            <div className={classes.priceAndDollarSignContainer}>
              <span className={classes.dollarsign}>$</span>
              <h1 className={classes.price}>77</h1>
            </div>
          </div>
          <div className={classes.itemsList}>
            <p className={classes.listItem}>Full Face Rs.250</p>
            <p className={classes.listItem}>Cheeks Rs.90</p>
            <p className={classes.listItem}>Jawline Rs.50</p>
            <p className={classes.listItem}>Lower Lip Rs.50</p>
            <p className={classes.listItem}>Upper Lip Rs.250</p>
            <p className={classes.listItem}>Under arms Rs.100</p>
            <p className={`${classes.listItem} `}>Full legs Rs.450</p>
            <p className={`${classes.listItem} `}>Half legs Rs.250</p>
            <p className={`${classes.listItem} `}>Daily Backups</p>
            <p className={`${classes.listItem} `}>One click setup</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Pricing;
