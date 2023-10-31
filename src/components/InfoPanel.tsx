import { useState } from 'react';
import carticon from '../assets/icon-cart.svg'
import minusicon from '../assets/icon-minus.svg'
import plusicon from '../assets/icon-plus.svg'

function InfoPanel() {
  const infotitle = "Fall Limited Edition Sneakers";
  const extrainfo = "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer."
  const [quantity, setQuantity] = useState(0)
  
  const increaseQuantity = ()=>{
    setQuantity(quantity+1)
  }
  
  const decreaseQuantity = ()=>{
    setQuantity(quantity>0?quantity-1:0)
  }
  
  return (
    <div className="infopanel">
      <div className="infopanelsub">
        <p className="companytext">SNEAKER COMPANY</p>
        <h2 className="title">{infotitle}</h2>
        <p className="extrainfotext">{extrainfo}</p>
        <div className="pricingpanel">
          <h2 className="price">$125.00</h2>
          <p className="discount">50%</p>
        </div>
        <p className="discountedprice">
          <s>$250.00</s>
        </p>
        <div className="quantityandcart">
          <div className="changequantity">
            <img className='increasequantity' src={minusicon} onClick={decreaseQuantity}>

            </img>
            <p className='quantitydisplay'>
              {quantity.toString()}
            </p>
            <img className='increasequantity' src={plusicon} onClick={increaseQuantity}>

            </img>
          </div>
          <button className="addtocart">
            <img src={carticon}></img>
            Add to cart

          </button>
        </div>
      </div>
      
    </div>
  )
}

export default InfoPanel