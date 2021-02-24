import React from "react";

const Login = ({ dark }) => {
  return (
    <div
      style={
        dark
          ? { background: "#444444", color: "#fff" }
          : { background: "#fff", color: "#000" }
      }
    >
      Login
    </div>
  );
};

export default Login;
