import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import NavBar from "./NavBar";
import UserContext from "./UserContext";
import FunctionContext from "./FunctionContext";
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
  const [jobApplication, setJobApplication] = useState({});

  useEffect(() => {
    setAuthToken(
      localStorage.getItem("authToken")
        ? JSON.parse(localStorage.getItem("authToken"))
        : { username: "", authToken: "" }
    );
  }, []);

  useEffect(() => {
    async function getUserAPI() {
      const response = await JoblyApi.getUser(authToken.username);
      setUser(response);
    }
    if (authToken && authToken.authToken) {
      JoblyApi.token = authToken.authToken;
      localStorage.setItem("authToken", JSON.stringify(authToken));
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
  }, [authToken, jobApplication]);

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
    localStorage.removeItem("authToken");
  };

  const handleSignup = async (formData) => {
    const response = await JoblyApi.postSignup(formData);
    setAuthToken({
      username: formData.username,
      authToken: response.token,
    });
  };

  const updateProfile = async (formData) => {
    const response = await JoblyApi.patchUser(formData);
    setUser(response);
  };

  const handleJobApplication = async (userJob) => {
    const response = await JoblyApi.postApply(userJob);
    setJobApplication(response);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <UserContext.Provider value={user}>
            <NavBar />
            <FunctionContext.Provider
              value={{
                handleJobApplication,
                handleLogin,
                handleLogout,
                handleSignup,
                updateProfile,
              }}
            >
              <Routes />
            </FunctionContext.Provider>
          </UserContext.Provider>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
