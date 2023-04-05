import "../styles/navbar.css"
import { Link } from "react-router-dom"
import CartImage from "../images/cart.svg"

const Navbar = (props) => {

    const { totalItemsCart, filled } = props

    return (
        <div className="navbar">
            <h2>Diamond Ace Games</h2>
            <div className="choices">
                <Link to="/">Home</ Link>
                <Link to="/shop">Shop</Link>
                <div className="cart--part">
                    <Link to="/cart">Cart</Link>
                    <img src={CartImage} alt="Shopping cart" style={{ width:"30px", height:"30px"}}/>
                    {filled && <div className="amount">{totalItemsCart <= 99 ? totalItemsCart: "99+"}</div>}
                </div>
            </div>
        </div>
    )  
}

export default Navbar