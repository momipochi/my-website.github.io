import { Link } from "react-router-dom";
import { headerNavUrl,content } from "../constants/constants";
import classes from "../assets/styles/navigationHeader.module.css";
import { Button, ThemeProvider } from "@mui/material";
import theme from "../assets/styles/theme";



const HeaderNavigation = () => {
  return (
    <div className={classes.header_menu}>
      <ThemeProvider theme={theme}>
        <div className={classes.name}>
          <h1>{content.myname}</h1>
        </div>
        <nav>
          <ul>
            <li>
              <Button
                component={Link}
                to={headerNavUrl.aboutme.url}
                color="primary"
              >
                {headerNavUrl.aboutme.text}
              </Button>
            </li>
            <li>
              <Button component={Link} to="/my-website.github.io/dummy">
                dumm1
              </Button>
            </li>
            <li>
              <Button component={Link} to="/my-website.github.io/dummy2">
                dummy2
              </Button>
            </li>
          </ul>
        </nav>
      </ThemeProvider>
    </div>
  );
};

export default HeaderNavigation;
