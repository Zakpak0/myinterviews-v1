import React, {useState, useEffect, useContext } from "react";
// import Button from './Button'
import { Link, useHistory } from 'react-router-dom';
import Dashboard from './Dashboard';
import Footer from './Footer';
import './Login.css';
import { signInWithGoogle, auth } from "../firebase/firebase";
// import { LoginContext } from "./LoginContext";
import { useLogin } from "./LoginContext";


const SignIn = () => {
    //const [displayName, setDisplayName] = useState();
    let [setIsLoggedIn] = useState();
    const [error, setError] = useState(null);
    let isLoggedIn  = useLogin();

    return (
      <div className="row h-100" id="login">
          <div className="container col-lg-12 offset-md-2 my-auto">
             {/* <header> */}
                  <h2><span></span> {'>'} My Interview  {'<'} <span></span></h2>
                  <h1>Diary</h1>
                  <h4>Document + Journal + Reflect</h4>
            {/*}  </header> */}
              <br/>
              <div className="form-group text-right">
              <button id="signInButtn" type="button" onClick={isLoggedIn} className="btn btn-lg btn-block btn-dark d-inline float-right">
            Sign in with Google
          </button>
          </div>
              <Footer />
          </div>
      </div>
  )
};

export default SignIn;