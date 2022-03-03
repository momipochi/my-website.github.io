
import footercss from "../assets/styles/footer.module.css";

import githubicon from "../assets/images/900px-Octicons-mark-github.png";
import meterialuiicon from "../assets/images/material-design-logo-8BAFEFE50B-seeklogo.com.png";
import reacticon from '../assets/images/2507930-middle.png'

import AvatarButton from "./AvatarButton";
import { links } from "../constants/constants";


const Footer = () => {
  return (
    <div className={footercss.main}>
      <h5>Links</h5>
      <AvatarButton alt="Github" src={githubicon} url={links.github}/>
      <AvatarButton alt="Material Ui" src={meterialuiicon} url={links.materialui} />
      <AvatarButton alt="React" src={reacticon} url={links.react} />
    </div>
  );
};

export default Footer;
