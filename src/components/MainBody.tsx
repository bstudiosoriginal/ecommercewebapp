import {Dispatch, SetStateAction, useState} from 'react'
import ImagePanel from './ImagePanel'
import InfoPanel from './InfoPanel'
import Cart from './Cart';

interface CartItemsProp {
  company: string
  name: string
  price: number
  quantity: number
  image: string
}

interface MainBodyProps {
  opencart: boolean;
  openModal: Dispatch<SetStateAction<boolean>>
}

const MainBody = ({opencart, openModal}: MainBodyProps) => {
  // const details = {
    // name: "Fall Limited Edition Sneakers",
    // company: "SNEAKER COMPANY",
    // price: 125.00,
    // quantity: 3,
    // image: '/ecommercewebapp/image-product-1-thumbnail.jpg'
  // }
  const arr: CartItemsProp[] = []
  
  const [cartItems, setCartItems] = useState(arr)
  
  return (
  <div className="mainbody">
    <ImagePanel openModal={openModal}/>
    <InfoPanel cartItems={cartItems} setCartItems={setCartItems}/>
    {opencart&&<Cart cartItems={cartItems} setCartItems={setCartItems}/>}
    
  </div>);
};

export default MainBody;
