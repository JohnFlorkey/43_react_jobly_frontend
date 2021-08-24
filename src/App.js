import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import NavBar from "./NavBar";
import UserContext from "./UserContext";
import JoblyApi from "./api";

function App() {
  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    isAdmin: false,
    jobs: [],
  });
  const [authToken, setAuthToken] = useState();

  useEffect(() => setAuthToken({ username: "", authToken: "" }), []);

  useEffect(() => {
    async function getUserAPI() {
      const response = await JoblyApi.getUser(authToken.username);
      setUser(response);
    }
    if (authToken && authToken.authToken) {
      JoblyApi.token = authToken.authToken;
      getUserAPI();
    } else {
      JoblyApi.token = "";
      setUser({
        username: "",
        firstName: "",
        lastName: "",
        isAdmin: false,
        jobs: [],
      });
    }
  }, [authToken]);

  const handleLogin = async (formData) => {
    const response = await JoblyApi.postLogin(formData);
    setAuthToken({
      username: formData.username,
      authToken: response.token,
    });
  };

  const handleLogout = () => {
    setAuthToken({
      username: "",
      authToken: "",
    });
  };

  const handleSignup = async (formData) => {
    const response = await JoblyApi.postSignup(formData);
    setAuthToken({
      username: formData.username,
      authToken: response.token,
    });
  };

  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <UserContext.Provider value={user}>
            <NavBar />
            <Routes props={{ handleLogin, handleLogout, handleSignup }} />
          </UserContext.Provider>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
