import React from "react";
import { xoxoLove } from "../../assets";
import { Link } from "react-router-dom";
import { Button, Gap } from "../../components";

const Login = () => {
  return (
    <div className="main-container">
      <div className="img-container"></div>
      <div className="form-container">
        <h1>Login</h1>
        <img src={xoxoLove} alt="logo" className="logo-img" />
        <form>
          <div className="form-group">
            {/* <label htmlFor="username">Username</label> */}
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Usename or Email"
              required
            />
          </div>
          <div className="form-group">
            {/* <label htmlFor="password">Password</label> */}
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
            />
          </div>
          <Gap height={20} />
          <div className="form-group">
            <Button title="Login" placeholder="login" />
          </div>
        </form>
        <p>
          Don't have an account? <Link to="/Register">Register</Link>
        </p>
      </div>
    </div>
  );
};
export default Login;
