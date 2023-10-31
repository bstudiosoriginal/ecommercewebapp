import {Dispatch, SetStateAction, useState} from 'react'
import ImagePanel from './ImagePanel'
import InfoPanel from './InfoPanel'
import Cart from './Cart';


interface MainBodyProps {
  opencart: boolean;
  openModal: Dispatch<SetStateAction<boolean>>
}

const MainBody = ({opencart, openModal}: MainBodyProps) => {
  const details = {
    name: "Fall Limited Edition Sneakers",
    company: "SNEAKER COMPANY",
    price: 125.00,
    quantity: 3,
    image: '/ecommercewebapp/image-product-1-thumbnail.jpg'
  }
  const [cartItems, _] = useState([details])
  
  return (
  <div className="mainbody">
    <ImagePanel openModal={openModal}/>
    <InfoPanel/>
    {opencart&&<Cart cartItems={cartItems}/>}
    
  </div>);
};

export default MainBody;
