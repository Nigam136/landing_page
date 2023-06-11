import React from "react";

const HomePage = ({ setUser }) => {
  return (
    <div className="homepage">
      <h1>Hello Homepage</h1>
      <div className="button" onClick={() => setUser({})}>
        Logout
      </div>
    </div>
  );
};

export default HomePage;
