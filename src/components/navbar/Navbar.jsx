import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  MenuItem,
  IconButton,
  Menu,
  Avatar,
  Switch,
  FormControlLabel,
} from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MoreIcon from "@material-ui/icons/MoreVert";
import { ThemeContext } from "../../contexts/ThemeContext";
import { AuthContext } from "../../contexts/AuthContext";
import "./Navbar.css";
import CustomButton from "../customButton/CustomButton";
import { auth } from "../../firebase.utils";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  inputRoot: {
    color: "inherit",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    color: "grey",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const { isLight, light, dark, dispatch } = useContext(ThemeContext);
  const theme = isLight ? light : dark;
  const { isAuthenticated, displayName, photoURL } = useContext(AuthContext);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleSignout = () => {
    auth.signOut();
  };

  const getFirstName = () => {
    let firstName = "";
    if (displayName) {
      firstName = displayName.split(" ")[0];
    }
    return firstName;
  };

  const handleThemeToggle = (event) => {
    const { checked } = event.target;
    if (checked) {
      dispatch({ type: "DARK" });
    } else {
      dispatch({ type: "LIGHT" });
    }
  };

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Avatar alt="Remy Sharp" src={photoURL} className={classes.small} />
        <p className="displayname__mobile">{getFirstName()}</p>
      </MenuItem>
      <MenuItem>
        <FormControlLabel
          control={<Switch checked={!isLight} onChange={handleThemeToggle} />}
          label="Dark Mode"
        />
      </MenuItem>
      <MenuItem onClick={handleSignout}>
        <ExitToAppIcon style={{ color: "#2d3436" }} />
        <p className="displayname__mobile">Logout</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{ backgroundColor: theme.ui }}>
        <Toolbar>
          <Typography className={classes.title} variant="h5" noWrap>
            <IconButton edge="end" aria-haspopup="true" color="inherit">
              <Avatar alt="Remy Sharp" src={photoURL} />
            </IconButton>
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <div>
              <ul
                className={`nav__list ${isLight ? "nav__light" : "nav__dark"}`}
              >
                <li className="nav__list--item">{getFirstName()}</li>
                <li className="nav__list--item">
                  <FormControlLabel
                    control={
                      <Switch checked={!isLight} onChange={handleThemeToggle} />
                    }
                    label="Dark Mode"
                  />
                </li>
                <li className="nav__list--item">
                  {isAuthenticated ? (
                    <CustomButton
                      textColor={isLight ? dark.text : light.text}
                      color={isLight ? dark.ui : light.ui}
                      onClick={handleSignout}
                    >
                      Logout
                    </CustomButton>
                  ) : (
                    ""
                  )}
                </li>
              </ul>
            </div>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}
