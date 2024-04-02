import { useEffect, useState } from "react";
import image1 from "./images/image1.jpg"
import image2 from "./images/image2.jpg"
import image3 from "./images/image3.jpg"
import image4 from "./images/image4.jpg"
import "./App.css"

function App() {

  const [selectedImage, setSelectedImage] = useState(0)
  const [allImages, setAllImages] = useState([image1, image2, image3, image4])

  // useEffect(() => {
  //   setInterval(() => {
  //     setSelectedImage(selectedImage => selectedImage < 3 ? selectedImage + 1 : 0)
  //   }, 1000)
  // }, [])

  return (
    <div className="photo">
      <img width={510} height={600} display-content="center" margin-left="80px"  src={allImages[selectedImage]} /> <br />
      <button
        onClick={() => {
          if (selectedImage > 0)
            setSelectedImage(selectedImage - 1)
        }}
      >PREV</button>

      <button
        onClick={() => {
          if (selectedImage < allImages.length - 1)
            setSelectedImage(selectedImage + 1)
        }}
      >NEXT</button>

    </div>
  );
}

export default App;