import React, { useContext, useRef, useState } from "react";
import { toast } from "react-toastify";
import { ContextStore } from "../App";
import { ImSpinner6 } from "react-icons/im";
import axios from "axios";
const LOGIN_API = "https://cemkfest.in/backend/api/login.php";
function Login() {
  const store = useContext(ContextStore);
  const setLoginTrue = (name, roll, mail) => {
    store.setMainStore((e) => {
      var s = {
        userName: name,
        roll: roll,
        mail: mail,
        isLogin: true,
      };
      return { ...e, ...s };
    });
  };
  const [spin, setSpin] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const handelLogin = () => {
    setSpin(!spin);
    const userMail = emailRef.current.value;
    const userPass = passwordRef.current.value;
    if (!userMail || !userPass) {
      toast.warn("All fields are mandatory.");
      setSpin(false);
    } else {
      axios
        .post(LOGIN_API, {
          email: userMail,
          password: userPass,
        })
        .then((response) => {
          if (response.data.code != 200) {
            toast.error(response.data.msg);
            setSpin(false);
          } else {
            setLoginTrue(
              response.data.name,
              response.data.roll,
              response.data.mail
            );
          }
        });
    }
  };
  return (
    <div className="logcntainer">
      <div className="logincon">
        <div className="row1">
          <div className="imgbx">Participant Login</div>
        </div>
        <input type="email" placeholder="Enter your email" ref={emailRef} />
        <input
          type="password"
          placeholder="Enter your password"
          ref={passwordRef}
        />
        {spin ? (
          <button>
            <ImSpinner6 size={20} className="spin" />
          </button>
        ) : (
          <button onClick={handelLogin}>Login</button>
        )}
      </div>
      <div className="cpr">
          Developed By <span>Ayondip Jana</span>
        </div>
    </div>
  );
}

export default Login;
