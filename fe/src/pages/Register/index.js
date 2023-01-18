import React from "react";
import "./register.css";
import { xoxoLove } from "../../assets";
import { Link } from "react-router-dom";
import { Button, Gap } from "../../components";

const Register = () => {
  return (
    <div className="main-container">
      <div className="img-container"></div>
      <div className="form-container">
        <h2>Make a New Account</h2>
        <img src={xoxoLove} className="logo-img" />
        <form>
          <div className="form-group">
            {/* <label htmlFor="nama">Nama</label> */}
            <input
              type="text"
              name="nama"
              id="nama"
              placeholder="Nama"
              required
            />
          </div>
          <div className="form-group">
            {/* <label htmlFor="email">Email</label> */}
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            {/* <label htmlFor="username">Username</label> */}
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Usename"
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
          <div className="form-group">
            {/* <label htmlFor="passwordCheck">Ulangi Password</label> */}
            <input
              type="password"
              name="passwordCheck"
              id="passwordCheck"
              placeholder="Ulangi Password"
              required
            />
          </div>
          <Gap height={20} />
          <div className="form-group">
            <Button title="Register" type="submit" />
          </div>
        </form>
        <p>
          already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
