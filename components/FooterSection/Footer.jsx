import React from 'react'
import classes from './Footer.module.css';
import {BsFacebook,BsTwitter,BsYoutube,BsInstagram} from 'react-icons/bs';

const Footer = () => {
  return (
    <div className={classes.container}>
        <div className={classes.copyRights}>
            <p>&copy; Blush Beauty. All Rights Reserved</p>
        </div>
        <div className={classes.socialMediaIconsContainer}>
            <BsFacebook/>
            <BsTwitter/>
            <BsYoutube/>
            <BsInstagram/>
        </div>
    </div>
  )
}

export default Footer