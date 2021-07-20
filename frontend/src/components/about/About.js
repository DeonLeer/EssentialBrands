import React from 'react'
import image1 from '../../images/aboutUs/1.jpg'
import image2 from '../../images/aboutUs/2.jpg'
import image3 from '../../images/aboutUs/3.jpg'
import './About.css'

export default function About(props) {
  return (
    <div className="AboutUs">
      <h1>About Us</h1>
      <div className="TextAndImage1">
        <img src={image2} alt="product order" className="image"/>
        <p className="AboutUsText1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae tristique leo, non vehicula leo. Vivamus fermentum faucibus urna, ut porta enim vestibulum ac. Cras posuere mi vestibulum ex finibus dapibus. In varius, erat non varius porta, orci nunc ultrices ligula, eget auctor urna velit non mi. Aenean auctor maximus magna, sit amet dictum nunc. Morbi sapien risus, aliquet eget massa sit amet, convallis imperdiet dui. Duis fringilla pharetra erat sit amet tempus. Aliquam erat volutpat. Morbi efficitur tincidunt bibendum. Praesent elit risus, pellentesque id placerat id, egestas quis nibh. Morbi nec mi quis libero luctus dictum. Donec interdum elit cursus orci pulvinar accumsan. Sed quis nulla non ex elementum egestas.</p>
      </div>
      <div className="TextAndImage2">
        <p className="AboutUsText">Vivamus consequat condimentum urna, vel varius odio ultricies vestibulum. Sed quam tortor, pulvinar non fringilla eget, maximus non enim. Cras at vehicula turpis, in bibendum eros. Nulla facilisi. Morbi at placerat augue. Maecenas placerat at arcu sit amet porta. Maecenas consectetur ultrices mauris, at malesuada arcu scelerisque luctus. Cras fringilla malesuada nibh ut molestie.</p>
        <img src={image3} alt="product order" className="image"/>
      </div>
      <div className="TextAndImage1">
        <img src={image1} alt="product order" className="image"/>
        <p className="AboutUsText">Mauris a tortor scelerisque, rhoncus eros non, accumsan arcu. Fusce in lorem ac tortor rhoncus dignissim vel nec nibh. Duis ultricies ultrices magna, nec vehicula turpis accumsan eu. Morbi condimentum tincidunt ante, in vulputate velit condimentum vel. Nunc tortor dolor, fringilla ut augue sit amet, tristique dictum ante. Curabitur sit amet nisi eget massa ultricies lacinia sit amet eu augue. Quisque consequat vulputate lacus, eget venenatis quam imperdiet a. Quisque ipsum turpis, tincidunt sed blandit quis, dignissim ac purus. Integer sit amet convallis lorem.</p>
      </div>
    </div>

  )
}