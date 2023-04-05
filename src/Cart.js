import "./styles/cart.css"

const Cart = (props) => {

  const { 
          inCart, 
          totalItemsCart, 
          totalPrice, 
          removeItem 
        } = props
  
  const cartArray = inCart.map((item) => {
    return <div className="cart--item" key={inCart.indexOf(item)}>
             <p>{item.name}</p>
             <p>{item.quantity}</p>
           </div>
  })

  return (
    <div className="cart--container">
      <div className="cart">
        {cartArray}
      </div>
    </div>
  )
}

export default Cart
