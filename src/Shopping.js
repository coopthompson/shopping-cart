import Navbar from "./components/navbar"
import Set from "./images/set.jpg"
import Draft from "./images/draft.jpg"
import Collector from "./images/collector.jpg"
import Darkworld from "./images/darkworld.jpg"
import Photon from "./images/photon-hyper.jpg"
import Mirror from "./images/maze-mirrors.jpg"
import Scarlet from "./images/scarlet.jpg"
import Violet from "./images/violet.jpg"
import Both from "./images/scarvio.jpg"
import Lotus from "./images/lotus.jpg"
import React,{ useState } from "react"
import Catalogue from "./components/catalogue"

const Shopping = () => {

  const [itemList, setItemList] = useState({
    items: [
      {
        quantity: 0,
        name:"March of the Machines Draft Booster",
        src:Draft,
        id:0
      },{
        quantity: 0,
        name:"March of the Machines Set Booster",
        src:Set,
        id:1
      },{
        quantity: 0,
        name:"March of the Machines Collector Booster",
        src:Collector,
        id:2
      },{
        quantity: 0,
        name:"Darkworld Structure Deck",
        src:Darkworld,
        id:3
      },{
        quantity: 0,
        name:"Maze of Memory Booster Box",
        src:Mirror,
        id:4
      },{
        quantity: 0,
        name:"Photon Hypernova Booster Box",
        src:Photon,
        id:5
      },{
        quantity: 0,
        name:"Pokemon Scarlet Elite Trainer Box",
        src:Scarlet,
        id:6
      },{
        quantity: 0,
        name:"Pokemon Violet Elite Trainer Box",
        src:Violet,
        id:7
      },{
        quantity: 0,
        name:"Pokemon Scarlet & Violet Booster Box",
        src:Both,
        id:8
      },{
        quantity: 0,
        note:"One left!",
        name:"Alpha Black Lotus",
        src:Lotus,
        id:9
      }
    ]
  })
    return (
      <div>
        <Navbar />
        <Catalogue itemList={itemList} />
      </div>
    )
}
export default Shopping 
