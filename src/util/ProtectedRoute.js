import React, { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  debugger;
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkUserData = () => {
    const userdata = localStorage.getItem("user");
    if (!userdata || userdata === "undefined") {
      setIsLoggedIn(false);
      return navigate("/auth/login");
    }
    setIsLoggedIn(true);
  };

  useEffect(
    () => {
      checkUserData();
  },
  // eslint-disable-next-line 
  [isLoggedIn]

  // eslint-disable-next-line
  );

  return <React.Fragment>{isLoggedIn ? props.children : null}</React.Fragment>;
};

export default ProtectedRoute;
