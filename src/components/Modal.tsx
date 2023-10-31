import { Dispatch, SetStateAction, useRef, useState } from "react";
import previcon from '../assets/icon-previous.svg'
import nexticon from '../assets/icon-next.svg'
import closeicon from '../assets/icon-close.svg'
import { MediaQuery } from "./MediaQuery";

interface ModalProps {
    visible: boolean
    setVisible: Dispatch<SetStateAction<boolean>>
}
export default function Modal({ visible, setVisible }: ModalProps) {
  const modalRef = useRef(null);

  const [currentImageIdx, setcurrentImageIdx] = useState(-1)
  const isMobile = MediaQuery({max_width: 800})
  const thumbnails = ["/ecommercewebapp/images/image-product-1-thumbnail.jpg", 
                      "/ecommercewebapp/images/image-product-2-thumbnail.jpg",
                      "/ecommercewebapp/images/image-product-3-thumbnail.jpg",
                      "/ecommercewebapp/images/image-product-4-thumbnail.jpg"
                    ]
  const images = ["/ecommercewebapp/images/image-product-1.jpg", 
                  "/ecommercewebapp/images/image-product-2.jpg",
                  "/ecommercewebapp/images/image-product-3.jpg",
                  "/ecommercewebapp/images/image-product-4.jpg"
                ]
  const [selectedThumbnail, setselectedThumbnail] = useState('/ecommercewebapp/images/image-product-1-thumbnail.jpg')
  
  const [displayimg, setdisplayimg] = useState("/ecommercewebapp/images/image-product-1.jpg")
  const handleThumbnailClick = (key: number) => {
    setselectedThumbnail(thumbnails[key])
    // console.log(selectedThumbnail)
    setdisplayimg(images[key])
    setcurrentImageIdx(key)
  }

  const goToNextImage = () => {
    const key = currentImageIdx+1<images.length?currentImageIdx+1:currentImageIdx
    setselectedThumbnail(thumbnails[key])
    // console.log(selectedThumbnail)
    setdisplayimg(images[key])
    setcurrentImageIdx(key)
  }

  const goToPrevImage = () => {
    const key = currentImageIdx>0?currentImageIdx-1:currentImageIdx
    setselectedThumbnail(thumbnails[key])
    // console.log(selectedThumbnail)
    setdisplayimg(images[key])
    setcurrentImageIdx(key)
  }

  return (
    <>
      {visible ? (
        <div
          style={{
            position: "fixed",
            display: "flex",
            flexDirection: "row",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: "100",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.7)",
          }}
        //   onClick={(e) => {
        //     var contains = false;
        //     var current = modalRef.current;
        //     if (current !== null){
        //         contains:  = current.contains(e.target)
        //     }
        //     if (contains) {
        //       return;
        //     }
            // setVisible(false);
        //   }}
        >
          <div className="modalcontent" ref={modalRef}>
          
            <img className="closemodalicon" src={closeicon} alt="close modal" onClick={() => setVisible(false)}></img>
            <div>
            <div className="imagepanelsub">
                <div className="mainimgdisplay">
                <img className="prevbutton" src={previcon} alt="previous image" onClick={goToPrevImage}></img>
                <img className="mainimg" src={displayimg} alt="main image"></img>
                <img className="nextbutton" src={nexticon} alt="next image" onClick={goToNextImage}></img>
                </div>
                <div className="imagethumbnailcontainer">
                {isMobile&&thumbnails.map((item, key) => 
                <div className={item===selectedThumbnail?'borderthumbnailselected':'borderthumbnailunselected'}>
                    <img alt="thumbnail images" src={item} className={item===selectedThumbnail?'thumbnailselected':'thumbnailunselected'} onClick={()=>{handleThumbnailClick(key)}}></img>
                </div>)}
                </div>
      </div>
            </div>
           
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}