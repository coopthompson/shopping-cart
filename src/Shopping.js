import "./styles/shopping.css";
import React from "react";
import Catalogue from "./components/catalogue";
import { useNavigate } from "react-router-dom";

const Shopping = (props) => {

  const { 
          items, 
          totalPrice, 
          totalItemsCart, 
          putInCart,
          checkCart
        } = props

  let navigate = useNavigate();
  const routeChange = () =>{ 
    let path = `/cart`; 
    navigate(path);
  }; 

  return (
    <div>
      <div className="button--container">
        <button 
          onClick={routeChange} 
          className="cart--button">{`Items in Cart: ${totalItemsCart}`}
        </button>
      </div>
      <Catalogue 
        itemList={items} 
        totalItemsCart={totalItemsCart}
        totalPrice={totalPrice}
        putInCart={putInCart}
        checkCart={checkCart}
      />
    </div>
  );
};
export default Shopping;
