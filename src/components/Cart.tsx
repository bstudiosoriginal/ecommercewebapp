import deleteicon from '../assets/icon-delete.svg'

interface CartItemsProp {
  company: string
  name: string
  price: number
  quantity: number
  image: string
}

interface CartProps {
  cartItems: Array<CartItemsProp>
}

function Cart({cartItems}: CartProps) {

  const createCartItems = ()=> {
    if (cartItems.length > 0){
        return cartItems.map( (item)=>
            <div className="cartItem">
                <img className="cartItemImage" src="/ecommercewebapp/public/images/image-product-1-thumbnail.jpg" alt="product image">
                    {/* <span>3</span> */}
                </img>
                <div className="cartItemInfoContainer">
                    <p className="CartItemName">{item.name}</p>
                    <p className="CartItemQP">${item.price.toString()} x {item.quantity.toString()} <b>${item.price*item.quantity}</b></p>
                </div>
                <img className="deletefromcart" alt="remove from cart" src={deleteicon}></img>
            </div>
        
        )
    }
    else{
      return <p className='emptycarttext'>Your cart is empty.</p>
    }
  }
  
  return (
    <div className="cart">
        <p className='para'>Cart</p>
        <div className='cartdisplay'>
            {createCartItems()}
            {cartItems.length>0&&<button className='cartbutton'>
                Checkout
            </button>}
        </div>
    </div>
  )
}

export default Cart