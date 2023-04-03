import "../styles/homepage.css"
import {ReactComponent as Left} from "../images/left.svg"
import {ReactComponent as Right} from "../images/right.svg"

const Homepage = (props) => {

  const { slideShow, upCount, downCount, handleMouseEnter, handleMouseLeave } = props
  const { count, images, isHover } = slideShow

  const leftStyling = { 
    width: "200px",
    height:"200px", 
    fill: isHover ? "#FEFFF1" : "darkgreen"
  }

  const rightStyling = {
    width: "200px",
    height:"200px", 
    fill: isHover ? "#FEFFF1" : "darkgreen"
  }

  return (
    <div>
      <div className="marquis">
        <h1 className="marquis--title">New to the Store</h1>
        <div className="display--box">
          <img className="display--actual" src={images[count].src} alt={images[count].alt}/>
          <div className="arrows">
            <Left onClick={downCount} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="left" alt="Left Arrow" style={leftStyling}/>
            <Right onClick={upCount} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="right" alt="Right Arrow" style={rightStyling}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage