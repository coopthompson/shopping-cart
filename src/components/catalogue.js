import "../styles/catalogue.css"

const Catalogue = (props) => {
   const { itemList, putInCart, checkCart } = props

   const bundle = (e) => {
    putInCart(e);
    checkCart();
   }

    const itemsDisplay = itemList.map((item) => {
        return <div className="card" key={item.id} id={item.id}>
            <p>{item.name}</p>
            <img className="card--image" src={item.src} alt={item.name}/>
            <p>Price: ${item.price}</p>
            <input className="quantity--input" type="number" name="quantity" placeholder={1}/>
            <button className="add" onClick={bundle} >Add to Cart</button>
        </div>
    })


    return (
        <div className="card--grid">
          {itemsDisplay}
        </div>
    )
}

export default Catalogue