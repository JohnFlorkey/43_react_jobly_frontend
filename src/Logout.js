import React, { useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import FunctionContext from "./FunctionContext";

function Logout({ props }) {
  const { handleLogout } = useContext(FunctionContext);
  useEffect(() => {
    return function cleanup() {
      handleLogout();
    };
  }, [handleLogout]);

  return <Redirect to="/"></Redirect>;
}

export default Logout;
