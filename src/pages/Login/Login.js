import React from "react";

import { useNavigate } from "react-router-dom";
import "./Login.css";

import { auth, provider } from "../../firebase-config";
import { signInWithPopup } from "firebase/auth";

import Button from "@material-ui/core/Button";

export const Login = ({setIsAuth}) => {
  const navigate = useNavigate();
  const signIn = () => {
    signInWithPopup(auth, provider).then((result)=> {
      localStorage.setItem('isAuth', true)
      setIsAuth(true)
      navigate('/')
    });
  };

  return (
    <div className="loginPage">
      <p>Sing in with Google to continue</p>
      <Button variant="contained" color="primary" onClick={signIn}>
        Sign in
      </Button>
    </div>
  );
};
