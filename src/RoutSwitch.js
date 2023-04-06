import React, { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shopping from "./Shopping";
import Cart from "./Cart";
import Navbar from "./components/navbar";
import scarviomarq from "./images/scarviomarq.jpg";
import photonmarq from "./images/photonmarq.jpg";
import mom from "./images/mom.jpg";
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
    { 
      isHover: false, 
      filled: false,
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
      totalPrice:0,
    }
  )
  

  const { 
          items, 
          inCart,
          totalItemsCart, 
          totalPrice, 
          images, 
          isHover, 
          filled,
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
    const input = siblings[3].value
    const quantity = parseInt(input)
    const ogItem = items[parentId]

    const hasGrocery = inCart.some((item) => {
      return item.id === ogItem.id ;
    })

    let newInCart = inCart.map((item) => {
      if (item.id === ogItem.id) {
          return {
              ...item,
              quantity: item.quantity += (input === "" ? 1 : quantity),
          };
      }
      return item
    }); 

    if (!hasGrocery) {
      const newItem = {...ogItem, quantity: (input === "" ? 1 : quantity)}
      setShopData((prevShopData) => {
        return {
          ...prevShopData,
          inCart:[...prevShopData.inCart, newItem],
          totalPrice: prevShopData.totalPrice + (input === "" ? itemPrice : (quantity * itemPrice)),
          totalItemsCart: prevShopData.totalItemsCart + (input === "" ? 1 : quantity)
        }
      })
    } else {
      setShopData((prevShopData) => {
        return {
          ...prevShopData,
          inCart:newInCart,
          totalPrice: prevShopData.totalPrice + (input === "" ? itemPrice : (quantity * itemPrice)),
          totalItemsCart: prevShopData.totalItemsCart + (input === "" ? 1 : quantity)
        }
      })
      
    }
  }

  const checkCart = () => {
    if (totalItemsCart > 0) {
      setShopData(prevShopData => {
        return {
          ...prevShopData,
          filled: true
        }
      })
      return;
    } else {
      setShopData(prevShopData => {
        return {
          ...prevShopData,
          filled: true
        }
      })
      return;
    }
  }
 
  const addQuant = (e) => {
    const item = e.target.parentNode.parentNode.parentNode
    const index = parseInt(item.getAttribute("data-index"))
    const priceTag = document.getElementById(`price${index}`).textContent
    const priceArray = priceTag.match(/\d+/g)
    const itemPrice = parseFloat(priceArray.join("."))
    const itemIdentity = parseInt(item.getAttribute("data-id"))
    const input = document.getElementById(`input${itemIdentity}`)

    if (input.value === "") {
      input.value = parseInt(input.placeholder) + 1
    } else {
      input.value = parseInt(input.value) + 1
    }

    let newInCart = inCart.map((item) => {
      if (itemIdentity === item.id) {
          return {
              ...item,
              quantity: (item.quantity += 1)
          };
      }
      return item
    });
    setShopData((prevShopData) => {
      return {
        ...prevShopData,
        inCart:newInCart,
        totalPrice: prevShopData.totalPrice + (itemPrice),
        totalItemsCart: prevShopData.totalItemsCart + 1,
        filled: true
      }
    })
  }

  const removeQuant = (e) => {
    const item = e.target.parentNode.parentNode.parentNode
    const index = parseInt(item.getAttribute("data-index"))
    const priceTag = document.getElementById(`price${index}`).textContent
    const priceArray = priceTag.match(/\d+/g)
    const itemPrice = parseFloat(priceArray.join("."))
    const itemIdentity = parseInt(item.getAttribute("data-id"))
    
    const itemData = inCart[index]
    const input = document.getElementById(`input${itemIdentity}`)

    if (input.value === "") {
      input.value = parseInt(input.placeholder) - 1
    } else if (itemData.quantity === 0) {
      return;
    } else {
      input.value = parseInt(input.value) - 1
    }

    let newInCart = inCart.map((item) => {
      if (itemIdentity === item.id && item.quantity !== 0) {
          return {
              ...item,
              quantity: (item.quantity -= 1),
          };
      }
      return item
    });
    setShopData((prevShopData) => {
        return {
          ...prevShopData,
          inCart:newInCart,
          totalPrice: prevShopData.totalPrice - (itemPrice),
          totalItemsCart: prevShopData.totalItemsCart - 1,
          filled: totalItemsCart <= 1 ? false : true
        }
    })
  }

  const handleChange = () => {
    console.log('test')

  }

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar
              totalItemsCart={totalItemsCart}
              filled={filled}
            />
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
            <Navbar
              totalItemsCart={totalItemsCart}
              filled={filled}
            />
            <Shopping
              items={items}
              totalItemsCart={totalItemsCart}
              totalPrice={totalPrice}
              putInCart={putInCart}
              checkCart={checkCart}
            />
          </>
        }/>
        <Route path="/cart" element={
          <>
            <Navbar
              totalItemsCart={totalItemsCart} 
              filled={filled}
            />
            <Cart
              inCart={inCart}
              totalItemsCart={totalItemsCart}
              totalPrice={totalPrice.toFixed(2)}
              removeQuant={removeQuant}
              addQuant={addQuant}
              handleChange={handleChange}
              checkCart={checkCart}
            />
          </>
        }/>
      </Routes>
    </HashRouter>
  );
};

export default RouteSwitch;