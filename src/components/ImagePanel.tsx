import { Dispatch, SetStateAction, useState } from "react"
import { MediaQuery } from "./MediaQuery"
import previcon from '../assets/icon-previous.svg'
import nexticon from '../assets/icon-next.svg'


interface ImagePanelProps {
  openModal: Dispatch<SetStateAction<boolean>>
}
function ImagePanel({openModal}: ImagePanelProps) {
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

  const handleOpenModal = ()=>{
    openModal(true)
  }

  return (
    <div className="imagepanel">
      <div className="imagepanelsub">
        <div className="mainimgdisplay">
          <img className="prevbutton" src={previcon} alt="previous image" onClick={goToPrevImage}></img>
          <img className="mainimg" src={displayimg} alt="main image" onClick={handleOpenModal}></img>
          <img className="nextbutton" src={nexticon} alt="next image" onClick={goToNextImage}></img>
        </div>
        <div className="imagethumbnailcontainer">
          {isMobile&&thumbnails.map((item, key) => 
          <div className={item===selectedThumbnail?'borderthumbnailselected':'borderthumbnailunselected'}>
            <img alt={"image thumbnail "+key.toString()} src={item} className={item===selectedThumbnail?'thumbnailselected':'thumbnailunselected'} onClick={()=>{handleThumbnailClick(key)}}></img>
          </div>)}
        </div>
      </div>
    </div>
  )
}

export default ImagePanel