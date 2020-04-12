import React, { useContext } from "react";
import { Grid, Typography } from "@material-ui/core";
import "./login.css";
import { ThemeContext } from "../contexts/ThemeContext";

const Login = () => {
  const { isLight, light, dark } = useContext(ThemeContext);
  const theme = isLight ? light : dark;
  return (
    <div
      className={`login__container ${isLight ? "light_theme" : "dark_theme"}`}
    >
      <Grid container>
        <Grid item xs={12} sm={6} md={6}>
          sd
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <form className='login__form'>
            <Typography align="center" variant="h4">
              Login to your account
            </Typography>
            <input
              type="text"
              className={`login__input ${
                isLight ? "light__input" : "dark__input"
              }`}
              placeholder="Email"
            />
            <input
              type="password"
              className={`login__input ${
                isLight ? "light__input" : "dark__input"
              }`}
              placeholder="Password"
            />
            <button>Sign In</button>
            <button>Sign In with Google</button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
