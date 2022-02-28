// import { Button } from "@mui/material";
import aboutcss from "../assets/styles/about.module.css";
import { content } from "../constants/constants";

const skillExp = "Skills & Experience";

const About = (props) => {
  return (
    props.hasContent ? <div className={aboutcss.main}>
    <h5>About website</h5>
    <p>{content.aboutwebsite}</p>
    <h5>{skillExp} </h5>
    <p>{content.skillsAndExp}</p>
    <h5>Personal projects</h5>
    <p>{content.personalProjects}</p>
    <h5>About me</h5>
    <p>{content.aboutme}</p>
  </div>: <div className={aboutcss.main}>
    <p>Nothing here yet..</p>
  </div>
  );
};

export default About;
