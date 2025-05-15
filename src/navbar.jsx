import styles from "./navbar.module.css";
import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { LuFacebook } from "react-icons/lu";
import { SlSocialTwitter } from "react-icons/sl";
const Navbar = () => {
  const [isShining, setIsShining] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsShining (true);
      setTimeout(() => setIsShining(false), 1500); 
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);
return(
    <>
    <div className={styles["navcover"]}>
    <div className={styles["portfoliocover"]}>
    <div className={styles["leftline"]}></div>
    <p  className={`${styles["portfolio"]} ${isShining? styles["shine"] : ""}`} > Portfolio .</p> 
    </div>
    <div className={styles["rightnav"]}>
    <div className={styles["home"]}>
    Home
    </div>
    <div className={styles["about"]}>
    About
    </div>
    <div className={styles["skill"]}>
    Skill
    </div>
    <div className={styles["project"]}>
    Project
    </div> 
    <div className={styles["contact"]}>
    Contact
    </div> 
          </div>
    </div>
    <div className={styles["homepagecover"]}>
        <div className={styles["homeleft"]}>
        <div className={styles["leftcard"]}>

        <div className={styles["leftstyle"]}> 
        <div className={styles["round"]}> </div>
        <div className={styles["line"]}> </div>
        </div>

        <div className={styles["lefttext"]}> 
        <div className={styles["frontend"]}>Frontend Developer</div>
        <div className={styles["hello"]}>Hello it's Me </div>
        <div className={styles["name"]}>Seshansu Sekhar Swain</div>
        <div className={styles["text1"]}>I am a passionate frontend developer with a keen eye for design and strong </div>
        <div className={styles["text1"]}>focus on building engaging user interfaces. I specialize in creating </div>
        <div className={styles["text1"]}>responsive and visually appealing websites. </div>
        <div className={styles["contactcover"]}>
        <div className={styles["whatsapp"]}><FaWhatsapp className={styles["whatsappicon"]}/></div>
        <div className={styles["instagram"]}><FaInstagram className={styles["instagramicon"]} /> </div>
        <div className={styles["facebook"]}><LuFacebook className={styles["facebookicon"]} /></div>
        <div className={styles["twitter"]}><SlSocialTwitter className={styles["twittericon"]} /></div>
        </div>
        <div className={styles["contactmecover"]}>
        <div className={styles["contactme"]}>Contact Me</div>
        </div>
        </div>
        </div>
        </div>

        <div className={styles["homeright"]}>
        <div className={styles["rightcard"]}> 
          <img src="./public/pic.jpg"/>
        </div>
        </div>
    </div>
    </>
  );
};

export default Navbar;
