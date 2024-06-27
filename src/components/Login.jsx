import React, { useState } from "react";
import Image from "../assets/image.png";
import Logo from "../assets/image.png";
import GoogleSvg from "../assets/image-copy.png";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";

const Login = ({ login, logout, setEmail, setPassword, session }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-main">
      <div className="login-left">
        <img src={Image} alt="" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          {!session ? (
            <>
              <div className="login-logo">
                <img src={Logo} alt="" />
              </div>
              <div className="login-center">
                <h3>ASHWIN Portal</h3>
                <h2>Welcome back, ASHA worker!</h2>
                <p>Please enter your login details</p>
                <form>
                  <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="pass-input-div">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {showPassword ? (
                      <FaEyeSlash
                        onClick={() => {
                          setShowPassword(!showPassword);
                        }}
                      />
                    ) : (
                      <FaEye
                        onClick={() => {
                          setShowPassword(!showPassword);
                        }}
                      />
                    )}
                  </div>

                  <div className="login-center-options">
                    <div className="remember-div">
                      <input type="checkbox" id="remember-checkbox" />
                      <label htmlFor="remember-checkbox">
                        Remember for 30 days
                      </label>
                    </div>
                    <a href="#" className="forgot-pass-link">
                      Forgot password?
                    </a>
                  </div>
                  <div className="login-center-buttons">
                    <button type="button" onClick={login}>
                      Log In
                    </button>
                    <button type="button">
                      <img src={GoogleSvg} alt="" />
                      Log In with Government Credentials
                    </button>
                  </div>
                </form>
              </div>

              <p className="login-bottom-p">
                Don't have an account? <a href="#">Sign Up</a>
              </p>
            </>
          ) : (
            <>
              <h2>Welcome back, you are logged in as:</h2>
              <h1>{session.email}</h1>
              <div className="login-center-buttons">
                <button type="button" onClick={logout}>
                  Log Out
                </button>
                <button type="button" className="proceed-button">
                  Proceed to Dashboard
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
