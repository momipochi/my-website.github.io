import { content } from "../constants/constants";
import footercss from "../assets/styles/footer.module.css";

import { ImageListItem, ImageList } from "@mui/material";
import githubLogo from '../assets/images/900px-Octicons-mark-github.png'
import materialuiLogo from '../assets/images/material-design-logo-8BAFEFE50B-seeklogo.com.png'


const copy = "©me";


const Footer = () => {
  return (
    <div className={footercss.main}>
      fuck me
      <div className={footercss.links}>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164} gap={10}>
          <ImageListItem>
            <img
              src={githubLogo}
              alt=''
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
          <img
              src={materialuiLogo}
              alt=''
              loading="lazy"
            />
          </ImageListItem>
      </ImageList>
      </div>
    </div>
  );
};

export default Footer;
