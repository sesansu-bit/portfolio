import styles from "./contact.module.css";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { LuFacebook } from "react-icons/lu";
import { SlSocialTwitter } from "react-icons/sl";
import { useState, useEffect } from "react";
const  Contact = () =>{
   const [isVisible, setIsVisible] = useState(false);
   useEffect(() => {
      const interval = setInterval(() => {
         setIsVisible(true);
        setTimeout(() => setIsVisible(false), 2000); 
      }, 4000); // Repeat every 7 seconds (2s animation + 3s delay)
  
      return () => clearInterval(interval); 
    }, []);


   return(<>    
   <div className={styles["Contact"]}>
       <div className={styles["contactcover"]}>
    <div className={styles["leftline"]}></div>
    <div className={`${styles["contacttext"]} ${isVisible? styles["animate"] : ""}`}> CONTACT ME</div>
    </div>
    <div  className={styles["boxcov"]}>
     <div  className={styles["firstbox"]}>

      <div className={styles["get"]}>GET IN TOUCH</div> 
       <div className={styles["oiconcover"]}>
              <div className={styles["whatsapp"]}><FaWhatsapp className={styles["whatsappicon"]}/></div>
              <div className={styles["instagram"]}><FaInstagram className={styles["instagramicon"]} /> </div>
              <div className={styles["facebook"]}><LuFacebook className={styles["facebookicon"]} /></div>
              <div className={styles["twitter"]}><SlSocialTwitter className={styles["twittericon"]} /></div>
              </div>
      </div> 
   <div className={styles["secbox"]}>
   <form>
   <div className={styles["formbox"]}>
   <input type="text"  placeholder="Enter your name" required/>
   <input type="email"  placeholder="Enter your email" required/>
   <input type="number"  placeholder="Enter your number" required/>

   <div className={styles["button"]}>Contact Me</div>
   </div> 
   </form>
   </div> 
   </div>
   </div>   
    </>
    );
   
}
export default Contact;