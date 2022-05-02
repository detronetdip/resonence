import React, { useContext, useRef, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { ContextStore } from "../App";
import { ImSpinner6 } from "react-icons/im";
const LOGIN_API = "https://cemkfest.in/backend/api/adminValidation.php";
function Login() {
  const store = useContext(ContextStore);
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
            store.setMainStore((e) => {
              var s = {
                isLogin: true,
              };
              return { ...e, ...s };
            });
          }
        });
    }
  };
  return (
    <div className="logcntainer">
      <div className="logincon">
        <div className="row1">
          <div className="imgbx">Admin Login</div>
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
    </div>
  );
}

export default Login;
