import styles from "./project.module.css";
import { useState, useEffect } from "react";
const  Project = () =>{
   const [isVisible, setIsVisible] = useState(false);
   useEffect(() => {
      const interval = setInterval(() => {
         setIsVisible(true);
        setTimeout(() => setIsVisible(false), 2000); 
      }, 4000); // Repeat every 7 seconds (2s animation + 3s delay)
  
      return () => clearInterval(interval); 
    }, []);


   return(<>    
   <div className={styles["Project"]}>
       <div className={styles["projectcover"]}>
    <div className={styles["leftline"]}></div>
    <div className={`${styles["project"]} ${isVisible? styles["animate"] : ""}`}> PROJECTS</div>
    </div>


   <div className={styles["projectbox"]}>
   <div className={styles["shoppingcover"]}>
   <div className={styles["shopimage"]}><img src="https://www.softwaretestinghelp.com/wp-content/qa/uploads/2022/10/Best-Online-Shopping-Websites.png"/></div>
   <div className={styles["shoppingtext"]}>
   Created a own design shopping website from scratch using JavaScript to manage product listings, cart functionality, and checkout processes.<p>github repositories link to cheakout project- https://github.com/sesansu-bit?tab=repositories</p>
   </div>
   </div>
   <div className={styles["instacover"]}>
   <div className={styles["instaimage"]}><img src="https://yi-files.s3.eu-west-1.amazonaws.com/products/944000/944824/1596305-full.jpg "/></div>
   <div className={styles["instatext"]}>
   Developed an Instagram clone using React to replicate the social media
   platform’s core features.<p>github repositories link to cheakout project- https://github.com/sesansu-bit?tab=repositories</p>
   </div>
   </div>
   <div className={styles["advancecover"]}>
   <div className={styles["advanceimage"]}><img src="https://i.pinimg.com/originals/ed/cd/32/edcd32b829a5c6e614a6d6383c562742.jpg"/></div>
   <div className={styles["advancetext"]}>
   Developed a more advanced version of the shopping app using React, incorporating modern state management with Redux Toolkit.<p>github repositories link to cheakout project- https://github.com/sesansu-bit?tab=repositories</p>
   </div>
   </div>
   <div className={styles["portcover"]}>
   <div className={styles["portimage"]}><img src="https://i.pinimg.com/originals/47/23/51/472351ded0828c02cfa96cbf84cf07ca.png"/></div>
   <div className={styles["porttext"]}>Created a personal portfolio website using React to showcase design and development skills.<p>github repositories link to cheakout project- https://github.com/sesansu-bit?tab=repositories</p></div>
   </div>

   </div>    
   </div>   
    </>
    );
   
}
export default Project;