import deleteicon from '../assets/icon-delete.svg';
import {Dispatch, SetStateAction } from 'react';

interface CartItemsProp {
  company: string
  name: string
  price: number
  quantity: number
  image: string
}

interface CartProps {
  cartItems: Array<CartItemsProp>
  setCartItems: Dispatch<SetStateAction<Array<CartItemsProp>>>
}



function Cart({cartItems, setCartItems}: CartProps) {

  const deleteCartItem = (key: number) => {
    // setCartItems()
    console.log('deleting', key)
    var cartList = cartItems.filter((_, idx)=>{return idx !== key})
    setCartItems(cartList)
  }

  const createCartItems = ()=> {
    if (cartItems.length > 0){
        return cartItems.map( (item, key)=>
            <div className="cartItem">
                <img className="cartItemImage" src="/ecommercewebapp/image-product-1-thumbnail.jpg" alt="product image">
                    {/* <span>3</span> */}
                </img>
                <div className="cartItemInfoContainer">
                    <p className="CartItemName">{item.name}</p>
                    <p className="CartItemQP">${item.price.toString()} x {item.quantity.toString()} <b>${item.price*item.quantity}</b></p>
                </div>
                <img className="deletefromcart" alt="remove from cart" src={deleteicon} onClick={()=>deleteCartItem(key)}></img>
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
            <div className='cartitembounds'>
              {createCartItems()}
            </div>
            {cartItems.length>0&&<button className='cartbutton'>
                Checkout
            </button>}
        </div>
    </div>
  )
}

export default Cart