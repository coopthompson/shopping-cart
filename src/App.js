import Homepage from "./components/homepage";
import Navbar from "./components/navbar"
import React, { useState } from "react";
import scarviomarq from "./images/scarviomarq.jpg";
import photonmarq from "./images/photonmarq.jpg";
import mom from "./images/mom.jpg"

function App() {

  const [slideShow, setSlideShow] = useState([scarviomarq,photonmarq,mom])

  return (
    <div>
      <Navbar />
      <Homepage slideShow={slideShow} />
    </div>
  );
}

export default App;


