import "../styles/navbar.css"
import {Link} from "react-router-dom"
import CartImage from "../images/cart.svg"

const Navbar = () => {
    let filled = false;
    let count = 1;
    return (
        <div className="navbar">
            <h2>Diamond Ace Games</h2>
            <div className="choices">
                <Link to="/">Home</ Link>
                <Link to="/shop">Shop</Link>
                <div className="cart--part">
                    <Link to="/cart">Cart</Link>
                    <img src={CartImage} alt="Shopping cart" style={{ width:"30px", height:"30px"}}/>
                    {filled && <div className="amount">{count}</div>}
                </div>
            </div>
        </div>
    )  
}

export default Navbar