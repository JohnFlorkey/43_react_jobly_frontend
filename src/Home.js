import React, { useContext } from "react";
import UserContext from "./UserContext";

function Home() {
  const user = useContext(UserContext);
  return user && user.username ? (
    <h2>Welcome Back {user.username}</h2>
  ) : (
    <h2>Login or Signup to use Jobly</h2>
  );
}

export default Home;
