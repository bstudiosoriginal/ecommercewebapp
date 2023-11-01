import carticon from "../assets/icon-cart.svg";
import menuicon from '../assets/icon-menu.svg'
import { Dispatch, MouseEvent, SetStateAction, useState } from "react";
import { MediaQuery } from "./MediaQuery";


interface NavigationProps {
  cartOpen: boolean;
  openCart: Dispatch<SetStateAction<boolean>>;
}
const Navigation = ({cartOpen, openCart}: NavigationProps) => {
  const [selected, setSelected] = useState("");
  const navitems = ["Collections", "Men", "Women", "About", "Contact"];
  const isMobile = MediaQuery({max_width: 530})

  const renderNavLinks = (state: boolean) => {
    if (state) {
      return (navitems.map((item, key) => (
        <div
          className={
            "navlinkcontainer" +
            (item === selected ? "selected" : "unselected")
          }
        >
          <a key={item} onClick={(event) => handleNav(event, key)}>
            {item}
          </a>
        </div>
      )))
    }
    return
  }

  const renderMenu = (state: boolean) => {
    if (!state) {
      return <img src={menuicon} alt='menu' className="menuicon"></img>
    }
  }
  const handleNav = (event: MouseEvent, key: number) => {
    console.log(event, key);
    setSelected(navitems[key]);
  };

  const toggleCart = () => {
    if (cartOpen) {
      openCart(false)
    }
    else {
      openCart(true)
    }
  }

  return (
    <div className="navigationtab">
      {renderMenu(isMobile)}
      <div className="logocontainer">
        <h1>sneakers</h1>
      </div>
      <div className="navigationlinkscontainer">
        {renderNavLinks(isMobile)}
      </div>
      <div className="userprofilecontainer">
        <div className="carticoncontainer">
          
          <img className="cartimg" alt="add to cart" src={carticon} onClick={toggleCart}></img>
          <p>3</p>
        </div>
        <div className="userimgcontainer">
          <img src="/ecommercewebapp/image-avatar.png" alt="userprofileimg"></img>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
