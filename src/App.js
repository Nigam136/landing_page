import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./page/RegisterPage";
import LoginPage from "./page/LoginPage";
import { useState } from "react";
import ManufacturerPage from "./page/ManufacturerPage";
import TransporterPage from "./page/TransporterPage";

function App() {
  const [user, setUser] = useState({});
  console.log("User", user);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<LoginPage setUser={setUser} />} />
        <Route path="/register" exact element={<RegisterPage />} />
        <Route
          path="/transporter"
          exact
          element={<TransporterPage user={user.name} />}
        />
        <Route
          path="/manufacturer"
          exact
          element={<ManufacturerPage user={user} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
