import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./register.css";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [add, setAdd] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();
    const data = { name, password, mobile, add, role };
    axios
      .post("http://localhost:5000/register", data)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        // console.log(err);
        alert("invalid inputs");
      });
  };

  return (
    <div className="register">
      <form className="form">
        <label className="lable">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className="lable">password:</label>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label className="lable">Contact:</label>
        <input
          type="text"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <label className="lable">address:</label>
        <input
          type="text"
          value={add}
          onChange={(e) => setAdd(e.target.value)}
        />

        <label className="lable">enter your role:</label>
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />

        <button className="button" type="submit" onClick={register}>
          Register
        </button>
        <div>OR</div>
        <button className="button" type="submit" onClick={() => navigate("/")}>
          Login
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
