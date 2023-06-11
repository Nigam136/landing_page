import axios from "axios";
import React, { useState } from "react";
import "./manufacturer.css";
import { useNavigate } from "react-router-dom";

const ManufacturerPage = () => {
  const [orderId, setOrderId] = useState("");
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [transporter, setTransporter] = useState("");

  const navigate = useNavigate();

  const sendMessage = (e) => {
    e.preventDefault();
    const msg = { orderId, to, from, quantity, transporter };
    axios
      .post("http://localhost:5000/manufacturer", msg)
      .then((res) => {
        console.log(res.data);
        setOrderId("");
        setTo("");
        setFrom("");
        setQuantity(0);
        setTransporter("");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div>
      <h1 className="head">Manufacturer Landing Page</h1>

      {/* <h2>Received Messages</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>To</th>
            <th>From</th>
          </tr>
        </thead>
        <tbody> */}
      {/* {message.map((msg) => (
            <tr key={msg.orderId}>
              <td>{msg.orderId}</td>
              <td>{msg.to}</td>
              <td>{msg.from}</td>
            </tr>
          ))} */}
      {/* </tbody> */}
      {/* </table> */}
      <div className="homepage">
        <h2>Send Message</h2>
        <form className="form" onSubmit={sendMessage}>
          <label className="lable" htmlFor="orderId">
            Order ID:
          </label>
          <input
            type="text"
            id="orderId"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            required
          />
          <br />
          <br />

          <label className="lable" htmlFor="to">
            To:
          </label>
          <input
            type="text"
            id="to"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            required
          />
          <br />
          <br />

          <label className="lable" htmlFor="from">
            From:
          </label>
          <input
            type="text"
            id="from"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            required
          />
          <br />
          <br />

          <label className="lable" htmlFor="quantity">
            Quantity:
          </label>
          <select
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          >
            <option value="">Select quantity</option>
            <option value="1">1 ton</option>
            <option value="2">2 ton</option>
            <option value="3">3 ton</option>
          </select>
          <br />
          <br />

          <label className="lable" htmlFor="transporter">
            Transporter:
          </label>
          <select
            id="transporter"
            value={transporter}
            onChange={(e) => setTransporter(e.target.value)}
          >
            <option value="">Select an transporter</option>
            <option value="Transporter A">Transporter A</option>
            <option value="Transporter B">Transporter B</option>
            <option value="Transporter C">Transporter C</option>
          </select>
          <br />
          <br />

          <button className="button" type="submit">
            Send Message
          </button>
          <button
            className="button"
            type="logout"
            onClick={() => navigate("/")}
          >
            Log out
          </button>
        </form>
      </div>
    </div>
  );
};

export default ManufacturerPage;
