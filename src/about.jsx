import styles from "./about.module.css";
import { useState, useEffect } from "react";
const About = () =>{
   const [isVisible, setIsVisible] = useState(false);
   useEffect(() => {
      const interval = setInterval(() => {
         setIsVisible(true);
        setTimeout(() => setIsVisible(false), 2000); 
      }, 4000); // Repeat every 7 seconds (2s animation + 3s delay)
  
      return () => clearInterval(interval); 
    }, []);


   return(<>    
   <div className={styles["About"]}>
       <div className={styles["aboutcover"]}>
    <div className={styles["leftline"]}></div>
    <div className={`${styles["about"]} ${isVisible? styles["animate"] : ""}`}> ABOUT ME</div>
    </div>

    <div className={styles["homepagecover"]}>
    <div className={styles["homeright"]}>
        <div className={styles["rightcard"]}> 
          <img src="/pic.jpg"/>
        </div>
        </div>


    <div className={styles["homeleft"]}>
    <div className={styles["aboutcontent"]}>
    I am Seshansu Sekhar Swain from Rourkela, currently pursuing my BTech from KIIT
Bhubaneswar and I am a Fresher Frontend Developer. My passion lies in creating captivating
frontend design. I stay up-to-date with current design trend. leveraging my creativity to
produce visually appealing and user-friendly websites. I believe that a web designed website
shouldn't only look visually appealing but also provide a smooth and enjoyable interaction for
visitors and i thoroughly research and analyze the user expectation and
requirement.
    </div>
        </div>

       
        </div>
    </div>   
       </>
    );
   
}
export default About;