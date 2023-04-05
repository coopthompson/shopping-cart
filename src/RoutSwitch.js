import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shopping from "./Shopping";
import Cart from "./Cart";
import Navbar from "./components/navbar";
import scarviomarq from "./images/scarviomarq.jpg";
import photonmarq from "./images/photonmarq.jpg";
import mom from "./images/mom.jpg"
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

const RouteSwitch = () => {

  const [shopData, setShopData] = useState(
      { isHover: false, 
      count:0, 
      images:[
        {
          src:scarviomarq, 
          alt:"Scarlet and Violet Pokemon TCG", 
          id:0 
        },{ 
          src:photonmarq, 
          alt:"Yugioh Photon Hypernova", 
          id:1 
        },{
          src:mom, 
          alt:"MTG March of the Machines", 
          id:2 
        }
      ],
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
    }
  )
  

  const { 
          items, 
          totalItemsCart, 
          totalPrice, 
          images, 
          isHover, 
          count  
        } = shopData

  const upCount = () => {
    if (count === images.length -1) {
      setShopData(prevShow => {
        return {
          ...prevShow,
          count: 0
        }
      })
      return;
    }
    setShopData(prevShow => {
      return {
        ...prevShow,
        count: count + 1
      }
    })
  }

  const downCount = () => {
    if (count === 0) {
      setShopData(prevShow => {
        return {
          ...prevShow,
          count: images.length-1
        }
      })
      return;
    }
    setShopData(prevShow => {
      return {
        ...prevShow,
        count: count - 1
      }
    })
  }

  const handleMouseEnter = () => {
    setShopData(prevShow => {
      return {
        ...prevShow,
        isHover: true
      }
    })
  }

  const handleMouseLeave = () => {
    setShopData(prevShow => {
      return {
        ...prevShow,
        isHover: false
      }
    })
  }

  const clickIndex = (e) => {
    const { id } = e.target
    setShopData (prevShow => {
      return {
        ...prevShow,
        count: parseInt(id)
      }
    })
  }

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
    const uneditedPrice = siblings[2].textContent
    const priceArray = uneditedPrice.match(/\d+/g)
    const itemPrice = parseFloat(priceArray.join("."))
    const quantity = parseInt(siblings[3].value)
    const placeValue = siblings[3].placeholder
    const ogItem = items[parentId]

    if (quantity > 0) {
      const newItem = {...ogItem, quantity: quantity}
      setShopData((prevItemList) => {
        return {
          ...prevItemList,
          inCart:[...prevItemList.inCart, newItem],
          totalPrice: prevItemList.totalPrice + (quantity * itemPrice),
          totalItemsCart: prevItemList.totalItemsCart + quantity
        }
      })
    } else if (parseInt(placeValue) === 1) {
      const newItem = {...ogItem, quantity: 1 }
      setShopData((prevItemList) => {
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <App 
              images={images}
              count={count}
              isHover={isHover} 
              upCount={upCount} 
              downCount={downCount}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              clickIndex={clickIndex}
            />
          </>
        }/>
        <Route path="/shop" element={
          <>
            <Navbar />
            <Shopping
              items={items}
              totalItemsCart={totalItemsCart}
              totalPrice={totalPrice}
              putInCart={putInCart}
            />
          </>
        }/>
        <Route path="/cart" element={
          <>
            <Navbar />
            <Cart />
          </>
        }/>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;