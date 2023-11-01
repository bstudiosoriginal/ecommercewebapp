import { useState } from 'react';
import carticon from '../assets/icon-cart.svg'
import minusicon from '../assets/icon-minus.svg'
import plusicon from '../assets/icon-plus.svg'
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

function InfoPanel({cartItems, setCartItems}: CartProps) {
  const infotitle = "Fall Limited Edition Sneakers";
  const extrainfo = "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer."
  const [quantity, setQuantity] = useState(0)
  
  const increaseQuantity = ()=>{
    setQuantity(quantity+1)
  }
  
  const decreaseQuantity = ()=>{
    setQuantity(quantity>0?quantity-1:0)
  }

  const addCartItem = ()=>{
    if (quantity > 0){

    
    var cartItem: CartItemsProp =  {company: "SNEAKER COMPANY",
                    name: infotitle,
                    price: 125,
                    quantity: quantity,
                    image: '"/ecommercewebapp/image-product-4-thumbnail.jpg"'} 
    setCartItems([...cartItems, cartItem])
    }
  }
  
  return (
    <div className="infopanel">
      <div className="infopanelsub">
        <p className="companytext">SNEAKER COMPANY</p>
        <h2 className="title">{infotitle}</h2>
        <p className="extrainfotext">{extrainfo}</p>
        <div className='mainpricepanel'>
          <div className="pricingpanel">
            <h2 className="price">$125.00</h2>
            <p className="discount">50%</p>
          </div>
          <p className="discountedprice">
            <s>$250.00</s>
          </p>
        </div>
        <div className="quantityandcart">
          <div className="changequantity">
            <img className='increasequantity' alt="increase quantity" src={minusicon} onClick={decreaseQuantity}>

            </img>
            <p className='quantitydisplay'>
              {quantity.toString()}
            </p>
            <img className='increasequantity' alt="decrease quantity" src={plusicon} onClick={increaseQuantity}>

            </img>
          </div>
          <button className="addtocart" onClick={addCartItem}>
            <img alt="Add to cart" src={carticon}></img>
            Add to cart

          </button>
        </div>
      </div>
      
    </div>
  )
}

export default InfoPanel