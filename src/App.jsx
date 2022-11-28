import React, { useCallback, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import BeatLoader from "react-spinners/BeatLoader";
import LandingPage from "./pages/LandingPage.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import LoggedInArea from "./pages/LoggedInArea.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Account from "./pages/Account.jsx";
import Layout from "./components/Layout.jsx";

const useApp = () => {
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
          console.log(data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleLogout = useCallback(() => {
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
  }, []);
  return { user, handleLogout, setUser }
};

function App() {
  const { user, handleLogout, setUser } = useApp();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true),
      setTimeout(() => {
        setLoading(false);
      }, 2000)
  }, [])

  return (
    <div className="container">
      {loading ? (<div>
        <BeatLoader />
      </div>)
        : (
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
        )}
    </div>
  );
}

export default App;
