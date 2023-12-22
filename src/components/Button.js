import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

function Button() {
  return (
    <Link to="signup" >
      <button className="btn">Sign Up</button>
      <Link to="login">
      <button className="btn">Login</button>
      </Link>
    </Link>
    
  );
}

export default Button;