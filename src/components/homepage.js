import "../styles/homepage.css"
import {ReactComponent as Left} from "../images/left.svg"
import {ReactComponent as Right} from "../images/right.svg"

const Homepage = (props) => {

  const { slideShow, upCount, downCount, handleMouseEnter, handleMouseLeave, clickIndex } = props
  const { count, images, isHover } = slideShow

  const arrowStyle = { 
    width: "200px",
    height:"200px", 
    fill: isHover ? "#FEFFF1" : "darkgreen"
  }
  
  const slidesArray = images.map(slide => {
    return <div 
      className="slide" 
      id={slide.id} 
      key={slide.id} 
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        backgroundColor: slide.id === count ? "#FEFFF1" : "darkgreen",
        opacity: "0.6",
      }} 
      onClick={clickIndex}>
    </div>
 })

  return (
    <div>
      <div className="marquis">
        <h1 className="marquis--title">New to the Store</h1>
        <div className="display--box">
          <img className="display--actual" src={images[count].src} alt={images[count].alt}/>
          <div className="arrows">
            <Left 
              onClick={downCount} 
              onMouseEnter={handleMouseEnter} 
              onMouseLeave={handleMouseLeave} 
              className="left" alt="Left Arrow" 
              style={arrowStyle}
            />
            <Right 
              onClick={upCount} 
              onMouseEnter={handleMouseEnter} 
              onMouseLeave={handleMouseLeave} 
              className="right" alt="Right Arrow" 
              style={arrowStyle}
            />
          </div>
          <div className="slides--indicator">{slidesArray}</div>
        </div>
      </div>
    </div>
  )
}

export default Homepage