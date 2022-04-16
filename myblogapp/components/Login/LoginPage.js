import styles from "./LoginPage.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
export default function LoginPage() {
  const [currentFormValues, setCurrentFormValues] = useState({
    username: "",
    password: "",
  });
  const [inputFormValues, setInputFormValues] = useState({
    username: "",
    password: "",
  });
  const [signUpToggler, setSignUpToggler] = useState(false);
  function usernameHandler(e) {
    setCurrentFormValues({ ...currentFormValues, username: e.target.value });
  }
  function passwordHandler(e) {
    setCurrentFormValues({ ...currentFormValues, password: e.target.value });
  }
  function formSubmitHandler(e) {
    e.preventDefault();
    setInputFormValues({
      ...inputFormValues,
      username: currentFormValues.username,
      password: currentFormValues.password,
    });
  }
  return (
    <>
      <div className={styles.outermostContainer}>
        <div className={styles.loginHeaderContainer}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2913/2913133.png"
            alt=""
            width="50px"
            height="50px"
          />
          <div>
            {signUpToggler ? (
              <h2 className={styles.loginHeader}>Sign Up</h2>
            ) : (
              <h2 className={styles.loginHeader}>Sign In</h2>
            )}
          </div>
        </div>
        <form
          onSubmit={(e) => {
            formSubmitHandler(e);
          }}
        >
          <div className={styles.loginBody}>
            {signUpToggler && (
              <TextField required label="First Name" margin="dense" />
            )}
            {signUpToggler && (
              <TextField required label="Last Name" margin="dense" />
            )}
            {signUpToggler ? (
              <TextField
                required
                label="Email Address"
                margin="dense"
                onChange={usernameHandler}
              />
            ) : (
              <TextField
                required
                label="Username"
                margin="dense"
                onChange={usernameHandler}
              />
            )}
            {signUpToggler ? (
              <TextField
                required
                label="Password"
                type="password"
                autoComplete="current-password"
                margin="dense"
                onChange={passwordHandler}
              />
            ) : (
              <TextField
                required
                label="Password"
                type="password"
                autoComplete="current-password"
                margin="dense"
                onChange={passwordHandler}
              />
            )}
            {signUpToggler ? (
              <Button
                type="submit"
                variant="contained"
                className={styles.signInButton}
              >
                Sign Up
              </Button>
            ) : (
              <Button
                type="submit"
                variant="contained"
                className={styles.signInButton}
              >
                Sign In
              </Button>
            )}

            <div className={styles.signUpTogglerContainer}>
              {signUpToggler && (
                <div
                  onClick={() => {
                    setSignUpToggler(!signUpToggler);
                  }}
                >
                  <u className={styles.signUpToggler}>
                    Already have an account? Sign in
                  </u>
                </div>
              )}
              {!signUpToggler && (
                <div>
                  <u className={styles.signUpToggler}>Forgot Password</u>
                </div>
              )}
              {!signUpToggler && (
                <div
                  onClick={() => {
                    setSignUpToggler(!signUpToggler);
                  }}
                >
                  <u className={styles.signUpToggler}>
                    Don't have an account? Sign Up
                  </u>
                </div>
              )}
            </div>
          </div>
          <div className={styles.loginFooter}>
            <Typography variant="body2" color="text.secondary" align="center">
              {"Copyright © "}
              <Link color="inherit" href="https://mui.com/">
                Your Website
              </Link>
              {` ${new Date().getFullYear()}`}
            </Typography>
          </div>
        </form>
      </div>
    </>
  );
}
