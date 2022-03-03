import { Link } from "react-router-dom";
import { headerNavUrl, content } from "../constants/constants";
import classes from "../assets/styles/navigationHeader.module.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "../assets/styles/theme";
import { useLocation } from "react-router-dom";
import ActiveHeader from "./ActiveHeader";

const HeaderNavigation = () => {
  const location = useLocation();
  return (
    <div className={classes.header_menu}>
      <ThemeProvider theme={theme}>
        <div className={classes.name}>
          <h1>{content.myname}</h1>
        </div>
        <nav>
          <ul>
            <li>
              <ActiveHeader
                component={Link}
                to={headerNavUrl.aboutme.url}
                color="primary"
                text={headerNavUrl.aboutme.text}
                location={location}
              />
            </li>
            <li>
              <ActiveHeader
                component={Link}
                to={headerNavUrl.portfolio.url}
                color="primary"
                text={headerNavUrl.portfolio.text}
                location={location}
              />
            </li>
            <li>
              <ActiveHeader
                component={Link}
                to="/my-website.github.io/dummy2"
                color="primary"
                text="dummy"
                location={location}
              />
            </li>
          </ul>
        </nav>
      </ThemeProvider>
    </div>
  );
};

export default HeaderNavigation;
