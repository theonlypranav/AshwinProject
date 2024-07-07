import React, { useState } from "react";
import Image from "../assets/image.png";
import Logo from "../assets/image.png";
import GoogleSvg from "../assets/image-copy.png";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Login = ({ login, logout, setEmail, setPassword, session }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [toggleOn, setToggleOn] = useState(false);

  const toggleSlider = () => {
    setToggleOn(!toggleOn);
  };

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
                <img src={Logo} alt="" style={{ width: '150px', height: 'auto' }} />
              </div>
              <div className="login-center">
                <h3>ASHWIN Portal</h3>
                <h2>Welcome back, ASHA Worker!</h2>
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

              <p className="login-bottom-p" style={{ marginTop: '10px' }}>
                Don't have an account? <a href="#">Sign Up</a>
              </p>
            </>
          ) : (
            <>
              <h2>Welcome back, you are logged in as:</h2>
              <h1>{session.email}</h1>
              <div className="login-center-buttons">
                <button type="button" classname="log-out" onClick={logout}>
                 <b>Log Out</b>
                </button>
                <Link to={"add-activity"} className="proceed-button">
                  <b>Go to Dashboard</b>
                </Link>
              </div>
              <div className="toggle-container">
                <label className="switch">
                  <input
                    type="checkbox"
                    onClick={toggleSlider}
                    checked={toggleOn}
                  />
                  <span className="slider round"></span>
                </label>
                <p className="toggle-label">
                  <b>Are you actively working: {toggleOn ? "YES" : "NO"}</b>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
