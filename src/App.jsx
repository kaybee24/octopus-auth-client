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
import Header from './components/Header.jsx';
import NewEvent from "./components/NewEvent";
import Footer from "./components/Footer";
import LoggedInAreaEvents from "./pages/LoggedInAreaEvents";
import Loader from "./pages/Loader";

function App() {
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState('')
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_AUTH_API}/me`, {
      mode: "cors",
      credentials: "include"
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setUser(data.data);
        }
        // console.log("hi")
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

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) setLoading(false)
    // TODO: only do loading in response to actual fetch requests
    setTimeout(() => setLoading(false), 2000)
  }, [user])

  return (
    <div>
      <Header 
        user={user}
        search={search}
        setSearch={setSearch}
        posts={posts}
        setPosts={setPosts}
        handleLogout={handleLogout}
      />
      {loading ? (<div className="h-[100vh] grid content-center"><div className="flex justify-center">
        <Loader />
      </div></div>)
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
            <Route
              path="/"
              element={<LandingPage user={user} />}
            />
            <Route
              path="/account"
              element={<Account user={user} handleLogout={handleLogout} />
              }
            />
            <Route
              path="/my-feed"
              element={<LoggedInArea 
                        search={search}
                        posts={posts} 
                        setPosts={setPosts} 
                        user={user} />}
            />
            <Route
              path="/new-event"
              element={<NewEvent user={user} />
              }
            />
            <Route
              path="/feed-events"
              element={<LoggedInAreaEvents user={user} />}
            />
            <Route
              path="*"
              element={<ErrorPage />}
            />
          </Routes>
        )}
      <Footer />
    </div>
  );
}

export default App;