import "./styles/cart.css"

const Cart = (props) => {
  const { 
          inCart, 
          totalItemsCart, 
          totalPrice, 
          removeQuant,
          addQuant,
          handleChange,
        } = props

  const cartArray = inCart.map((item) => {
    return <div className="cart--item" key={inCart.indexOf(item)} data-id={item.id} data-index={inCart.indexOf(item)}>
             <button className={`remove${inCart.indexOf(item)}`}>X</button>
             <div className="item--represent">
               <p>{item.name}</p>
               <img className="cart--image" alt={item.name} src={item.src}/>
             </div>
             <div className="item--part">
               <label htmlFor="price">Price</label>
               <p name="price" id={`price${inCart.indexOf(item)}`}>${item.price}</p>
             </div>
             <div className="item--part">
               <label htmlFor="item">Quantity</label>
               <div className="quantity--control">
                 <button className="quantity--remove" onClick={removeQuant}>-</button>
                 <input type="number" name="item" id={`input${item.id}`} className="item--quantity" placeholder={item.quantity} onChange={handleChange} />
                 <button className="quantity--add" onClick={addQuant}>+</button>
               </div>
             </div>
           </div>
  })

  return (
    <div className="cart--container">
      {totalItemsCart <= 0 && <p className="empty">NO ITEMS IN CART</p>}
      <div className="cart">
        {cartArray}
      </div>
      <p className="cart--total">{`Total: $${totalPrice}`}</p>
      <div className="cart--buttons">
        <button className="checkout">Checkout</button>
        <button className="cart--clear">Clear Cart</button>
      </div>
    </div>
  )
}

export default Cart
