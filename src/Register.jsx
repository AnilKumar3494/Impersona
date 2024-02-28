import React, { useEffect, useRef, useState } from "react";

import { CiCircleCheck } from "react-icons/ci";
import { MdError } from "react-icons/md";

import "./register.css";

const USER_REGX = /^[a-zA-z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGX = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
  //useRef() for user and error
  const userRef = useRef();
  const errRef = useRef();

  //state for user name inputs
  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  //state for passwords
  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  //on mount focus on userRef -- input
  useEffect(() => {
    userRef.current.focus();
  }, []);

  //useEffect to validate userName anytime state in that changes
  useEffect(() => {
    const result = USER_REGX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  //useEffect for password and passwd match
  useEffect(() => {
    const result = PWD_REGX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);

    //confirmation -- returns a boolean
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  //useEffect for error message -- clear the error when the [] changes
  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  return (
    <section className="regiser_form  flex_center">
      <h1>Register</h1>
      <form action="" className=" flex_center">
        <div className="username flex_center ">
          <label htmlFor="username flex_center">
            <p>Enter your User Name: </p>
            <span className={validName ? "valid" : "hide"}>
              <CiCircleCheck />
            </span>
            <span className={validName || !user ? "hide" : "invalid"}>
              <MdError />
            </span>
          </label>
          <input
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            required
            //accessibility attributes
            aria-invalid={validName ? "false" : "true"}
            aria-describedby="uidnote"
            //on change captures changes and sends to user -- for this will further be validated
            onChange={(e) => setUser(e.target.value)}
            //focus
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
          />
          <span
            id="uidnote"
            className={
              userFocus && user && !validName ? "instructions" : "offscreen"
            }
          >
            4 to 24 characters. <br />
            Must begin with a letter <br />
            Letters, Numbers, Underscores, hyphens allowed
          </span>
        </div>
        <div className="email">
          <input type="email" />
        </div>
        <div className="password">
          <input type="password" />
        </div>

        {/* displaying error message */}
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
      </form>
    </section>
  );
};

export default Register;
