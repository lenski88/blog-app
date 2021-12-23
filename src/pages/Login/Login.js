import React from "react";

import { useNavigate } from "react-router-dom";

import { auth, provider } from "../../firebase-config";
import { signInWithPopup } from "firebase/auth";

import Button from "@material-ui/core/Button";

export const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const signIn = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };
  return (
    <div className="loginPage">
      <h1>Sing in with Google to continue</h1>
      <Button variant="contained" color="primary" onClick={signIn}>
        Sign in
      </Button>
    </div>
  );
};
