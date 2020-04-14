import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import "./login.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import CustomButton from "../../components/customButton/CustomButton";
import Quotes from "../../components/quotes/Quotes";
import { signInWithGoogle } from "../../firebase.utils";

const Login = () => {
  const { isLight } = useContext(ThemeContext);
  // const theme = isLight ? light : dark;

  const handleSignIn = (event) => {
    event.preventDefault();
    signInWithGoogle()
  };

  return (
    <div
      className={`login__container ${isLight ? "light_theme" : "dark_theme"}`}
    >
      <Grid container>
        <Grid item xs={12} sm={12} md={6}>
          <div className="quotes__container">
            <Quotes />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <form className="login__form">
            <p className="login__form--title">Login to your account</p>
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
            <div className="login__buttons--container">
              <CustomButton variant="outlined" style={{ width: "40%" }}>
                Sign In
              </CustomButton>
              <CustomButton
                color="#4c8bf5"
                style={{ width: "50%" }}
                onClick={handleSignIn}
              >
                Sign In with Google
              </CustomButton>
            </div>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
