import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
// import { useHistory } from "react-router-dom";

const LoginPage = ({ setUser }) => {
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");

  // const history = useHistory();
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    const data = { password, mobile };
    axios
      .post("http://localhost:5000/login", data)
      .then((res) => {
        console.log(res.data);
        setUser(res.data.user);
        if (res.data.user.role === "manufacturer") {
          navigate("/manufacturer");
        } else if (res.data.user.role === "transporter") {
          navigate("/transporter");
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        alert("invalid inputs");
      });
  };

  return (
    <div className="login">
      <form className="form">
        <label className="lable">Contact:</label>
        <input
          type="text"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />

        <label className="lable">password:</label>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="button" type="submit" onClick={login}>
          Login
        </button>
        <div>OR</div>
        <button
          className="button"
          type="submit"
          onClick={() => navigate("/register")}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
