import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TransporterPage = () => {
  // const [orders, setOrders] = useState({});
  const [selectedorder, setSelectedOrder] = useState("");
  const [price, setPrice] = useState(0);

  const navigate = useNavigate();

  const sendMessage = (e) => {
    e.preventDefault();
    const msg = { selectedorder, price };

    axios
      .post("http://localhost:5000/transporter", msg)
      .then((res) => {
        console.log(res.data);
        setSelectedOrder("");
        setPrice(0);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div>
      <h1 className="head">Transporter Landing Page</h1>
      {/* {orders.data?.map((order) => {
        <div>{order.price}</div>;
      })} */}
      {/* <h2>Received Orders</h2>
      <table>
        <thead>
          <tr>
            <th>manufacturer</th>
            <th>Order ID</th>
            <th>to</th>
            <th>from</th>
            <th>quantity</th>
            <th>address</th>
            <th></th>
          </tr>
        </thead> */}
      {/* <tbody>
          {Object.keys(orders).map((order) => (
            <tr key={order}>
              <td>{order.user._id}</td>
              <td>{orders[order].to}</td>
              <td>{order.to}</td>
              <td>{order.from}</td>
              <td>{order.quantity}</td>
              <td>{order.address}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <div className="homepage">
        <h2>Send Message</h2>
        <form className="form" onSubmit={sendMessage}>
          <label className="lable" htmlFor="orderId">
            Order ID:
          </label>
          <select
            id="orderId"
            value={selectedorder}
            onChange={(e) => setSelectedOrder(e.target.value)}
            required
          >
            <option value="">Select an Order</option>
            <option value="order1">order 1</option>
            <option value="order2">order 2</option>
            <option value="order3">order 3</option>
            <option value="order4">order 4</option>
          </select>
          <br />
          <br />

          <label className="lable" htmlFor="price">
            Price:
          </label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            step="0.01"
            required
          />
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

export default TransporterPage;
