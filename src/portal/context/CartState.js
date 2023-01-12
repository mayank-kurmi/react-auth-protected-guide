import React, { useState, useMemo } from "react";
import CartContext from "./CartContext";

const CartState = (props) => {
  const [cartState, setCartState] = useState([]);

  const updateCart = async (cartData) => {
    //debugger;
    setCartState([...cartState, cartData]);
  };
  const getupdateCart = async () => {
    //debugger;
    return cartState;
  };

  return (
    <CartContext.Provider value={{ cartState, updateCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartState;
