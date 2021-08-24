import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

function Logout({ props }) {
  useEffect(() => {
    return function cleanup() {
      props.handleLogout();
    };
  }, [props]);

  return <Redirect to="/"></Redirect>;
}

export default Logout;
