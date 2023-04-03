import Homepage from "./components/homepage";
import Navbar from "./components/navbar"
import React, { useState } from "react";
import scarviomarq from "./images/scarviomarq.jpg";
import photonmarq from "./images/photonmarq.jpg";
import mom from "./images/mom.jpg"

function App() {

  const [slideShow, setSlideShow] = useState({ isHover: false, count: 0, images:[
    { src:scarviomarq, alt:"Scarlet and Violet Pokemon TCG", id:0},{ src:photonmarq, alt:"Yugioh Photon Hypernova", id:1},{ src:mom, alt:"MTG March of the Machines", id:2 }
  ]})

  const upCount = () => {
    if (slideShow.count === slideShow.images.length -1) {
      setSlideShow(prevShow => {
        return {
          ...prevShow,
          count: 0
        }
      })
      return;
    }
    setSlideShow(prevShow => {
      return {
        ...prevShow,
        count: slideShow.count + 1
      }
    })
  }

  const downCount = () => {
    if (slideShow.count === 0) {
      setSlideShow(prevShow => {
        return {
          ...prevShow,
          count: slideShow.images.length-1
        }
      })
      return;
    }
    setSlideShow(prevShow => {
      return {
        ...prevShow,
        count: slideShow.count - 1
      }
    })
  }

  const handleMouseEnter = () => {
    setSlideShow(prevShow => {
      return {
        ...prevShow,
        isHover: true
      }
    })
  }

  const handleMouseLeave = () => {
    setSlideShow(prevShow => {
      return {
        ...prevShow,
        isHover: false
      }
    })
  }

  return (
    <div>
      <Navbar />
      <Homepage slideShow={slideShow} upCount={upCount} downCount={downCount} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave}/>
    </div>
  );
}

export default App;


