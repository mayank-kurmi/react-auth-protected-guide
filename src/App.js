import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import CartContext from "./portal/context/CartContext";
import CartState from "./portal/context/CartState";
import PortalFooter from "./portal/footer/PortalFooter";
import PortalNavbar from "./portal/navbar/PortalNavbar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkUserToken = () => {
    const userToken = localStorage.getItem("user");
    if (!userToken || userToken === "undefined") {
      setIsLoggedIn(false);
    }
    setIsLoggedIn(true);
  };

  useEffect(() => {
    checkUserToken();
  }, [isLoggedIn]);

  return (
    <React.Fragment>
      {isLoggedIn && <PortalNavbar />}
      <Outlet />
      {/* {isLoggedIn && <PortalFooter />} */}
    </React.Fragment>
  );
}

export default App;
