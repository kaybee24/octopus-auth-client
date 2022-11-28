import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage.jsx";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import LoggedInArea from "./components/LoggedInArea.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Account from "./components/Account";
import Layout from "./components/Layout";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_AUTH_API}/me`, {
      mode: "cors",
      credentials: "include"
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          setUser(data.data);
          // console.log(data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleLogout = () => {
    fetch(`${import.meta.env.VITE_AUTH_API}/logout`, {
      mode: "cors",
      credentials: "include"
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          document.location.href = "/";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Routes>
      <Route
        path="/register"
        element={<Register setUser={setUser} />}
      />
      <Route
        path="/login"
        element={<Login setUser={setUser} />}
      />
      <Route path="/" element={<Layout />}>
        <Route
          path="/"
          element={<LandingPage />}
        />
        <Route
          path="/account"
          element={<Account user={user} handleLogout={handleLogout} />}
        />
        <Route
          path="/my-feed"
          element={<LoggedInArea user={user} />}
        />
        <Route
          path="*"
          element={<ErrorPage />}
        />
      </Route>
    </Routes>
  );
}

export default App;
