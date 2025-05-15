import styles from "./skill.module.css";
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { useState, useEffect } from "react";
import { TbBrandJavascript } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
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
   <div className={styles["Skill"]}>
       <div className={styles["skillcover"]}>
    <div className={styles["leftline"]}></div>
    <div className={`${styles["skill"]} ${isVisible? styles["animate"] : ""}`}>MY SKILLS</div>
    </div>

   <div className={styles["skillbox"]}>

   <div className={styles["htmlcover"]}>   
   <div className={styles["html"]}>  
   <div className={styles["htmliconcov"]}><IoLogoHtml5 className={styles["htmlicon"]} /></div> 
   <div className={styles["text1"]}>HTML5</div>
   <div className={styles["text2"]}>Build Stunning and Modern Websites with Interactive Features for Beginners and Experienced Developers.</div>
   </div>
   </div>
  

   <div className={styles["css3cover"]}>
   <div className={styles["css3"]}>
   <div className={styles["css3iconcov"]}><IoLogoCss3  className={styles["css3icon"]} />  </div>
   <div className={styles["text3"]}>CSS3</div>
   <div className={styles["text4"]}>Design Responsive, and Modern Websites with Dynamic Styling for Beginners and Advanced Developers.</div>
   </div>
   </div>

   <div className={styles["javascriptcover"]}>
   <div className={styles["javascript"]}>
   <div className={styles["javascripticoncov"]}><TbBrandJavascript  className={styles["javascripticon"]}/> </div>
   <div className={styles["text5"]}>JAVASCRIPT</div>
   <div className={styles["text6"]}>Create Interactive, Dynamic, Modern Websites with Powerful Features for Beginners and Advanced Developers.</div>
   </div>
   </div>


   <div className={styles["javacover"]}>
   <div className={styles["java"]}>
   <div className={styles["javaiconcov"]}><FaJava  className={styles["javaicon"]}/> </div>
   <div className={styles["text7"]}>JAVA</div>
   <div className={styles["text8"]}>Build Robust, Scalable, and Modern Applications for Beginners and Advanced Programmers with Ease.</div>
    </div> 
    </div> 
   <div className={styles["reactcover"]}>
   <div className={styles["react"]}>
    <div className={styles["reacticoncov"]}> <FaReact className={styles["reacticon"]} /> </div> 
   <div className={styles["text9"]}>REACT</div>
   <div className={styles["text10"]}>Build Dynamic, Modern, and Interactive Web Applications for Beginners and Advanced Developers.</div>
   </div>
   </div>

   <div className={styles["reduxcover"]}>
   <div className={styles["redux"]}>
   <div className={styles["reduxiconcov"]}> <SiRedux className={styles["reduxicon"]} /> </div>
   <div className={styles["text11"]}>REDUX TOOLKIT</div>
   <div className={styles["text12"]}>Simplify State Management for Dynamic, Scalable, and Modern Web Applications.</div>
   </div>
   </div>


   <div className={styles["githubcover"]}>
   <div className={styles["github"]}>
   <div className={styles["githubiconcov"]}><FaGithub className={styles["githubicon"]} /></div>
   <div className={styles["text13"]}>GITHUB</div>
   <div className={styles["text14"]}>Master Version Control, Collaboration, and Repository Management for Developers at All Levels.</div>
   </div>
   </div> 
   </div> 
   </div>      
       </>
    );
   
}
export default About;