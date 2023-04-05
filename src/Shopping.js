import "./styles/shopping.css";
import Navbar from "./components/navbar";
import Set from "./images/set.jpg";
import Draft from "./images/draft.jpg";
import Collector from "./images/collector.jpg";
import Darkworld from "./images/darkworld.jpg";
import Photon from "./images/photon-hyper.jpg";
import Maze from "./images/maze-mirrors.jpg";
import Scarlet from "./images/scarlet.jpg";
import Violet from "./images/violet.jpg";
import Both from "./images/scarvio.jpg";
import Lotus from "./images/lotus.jpg";
import React,{ useState } from "react";
import Catalogue from "./components/catalogue";
import { useNavigate } from "react-router-dom";

const Shopping = () => {

  let navigate = useNavigate();
  const routeChange = () =>{ 
    let path = `/cart`; 
    navigate(path);
  };

  const [itemList, setItemList] = useState({
    items: [
      {
        name:"March of the Machines Draft Booster",
        src:Draft,
        price:"112.61",
        id:0
      },{
        name:"March of the Machines Set Booster",
        src:Set,
        price:"117.33",
        id:1
      },{
        name:"March of the Machines Collector Booster",
        src:Collector,
        price:"212.88",
        id:2
      },{
        name:"Darkworld Structure Deck",
        src:Darkworld,
        price:"8.86",
        id:3
      },{
        name:"Maze of Memories Booster Box",
        src:Maze,
        price:"62.34",
        id:4
      },{
        name:"Photon Hypernova Booster Box",
        price:"69.90",
        src:Photon,
        id:5
      },{
        name:"Pokemon Scarlet Elite Trainer Box",
        src:Scarlet,
        price:"74.00",
        id:6
      },{
        name:"Pokemon Violet Elite Trainer Box",
        src:Violet,
        price:"73.00",
        id:7
      },{
        name:"Pokemon Scarlet & Violet Booster Box",
        src:Both,
        price:"123.49",
        id:8
      },{
        note:"One left!",
        name:"Alpha Black Lotus",
        price: "540000.00",
        src:Lotus,
        id:9
      }
    ],
    inCart:[],
    totalItemsCart:0,
    totalPrice:0
  });

  const getSiblings = (e) => {
    let siblings = [];
    if(!e.parentNode) {
        return siblings;
    }

    let sibling  = e.parentNode.firstChild;

    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== e) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
  }; 

  const putInCart = (e) => {

    const parentId = e.target.parentNode.id
    const siblings = getSiblings(e.target)
    console.log(siblings)
    const uneditedPrice = siblings[2].textContent
    const priceArray = uneditedPrice.match(/\d+/g)
    const itemPrice = parseFloat(priceArray.join("."))
    const quantity = parseInt(siblings[3].value)
    const placeValue = siblings[3].placeholder
    const ogItem = itemList.items[parentId]

    if (quantity > 0) {
      const newItem = {...ogItem, quantity: quantity}
      setItemList((prevItemList) => {
        return {
          ...prevItemList,
          inCart:[...prevItemList.inCart, newItem],
          totalPrice: prevItemList.totalPrice + (quantity * itemPrice),
          totalItemsCart: prevItemList.totalItemsCart + quantity
        }
      })
    } else if (parseInt(placeValue) === 1) {
      const newItem = {...ogItem, quantity: 1 }
      setItemList((prevItemList) => {
        return {
          ...prevItemList,
          inCart:[...prevItemList.inCart, newItem],
          totalPrice: prevItemList.totalPrice + itemPrice,
          totalItemsCart: prevItemList.totalItemsCart + 1
        }
      })
    }
  }

  return (
    <div>
      <Navbar itemList={itemList} />
      <div className="button--container">
        <button 
          onClick={routeChange} 
          className="cart--button">{`Items in Cart: ${itemList.totalItemsCart}`}
        </button>
      </div>
      <Catalogue 
        itemList={itemList} 
        putInCart={putInCart}
      />
    </div>
  );
};
export default Shopping;
