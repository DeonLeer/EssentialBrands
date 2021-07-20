import React, {useState} from 'react'
import FG_Logo from '../../images/ForbiddenGardenLogo.jpg'
import HP_Logo from '../../images/highProfile.jpeg'
import PO_Logo from '../../images/PureOrganticLogo.png'
import PP_Logo from '../../images/PP_Header.png'
import TE_Logo from '../../images/terpenexpress/default.png'
import FG_Header from '../../images/FG_Header.png'
import PO_Header from '../../images/PO_Header.png'
import TE_Header from '../../images/TPXHeader.png'
import HP_Header from '../../images/HPHeader.png'

import './Brands.css'
const brands = {
  FG: {
    name: 'Forbidden Garden',
    image: FG_Logo,
    text: 'Tortor at auctor urna nunc id cursus metus. Id cursus metus aliquam eleifend. Ut sem nulla pharetra diam sit amet nisl. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Proin sagittis nisl rhoncus mattis rhoncus urna. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Est placerat in egestas erat imperdiet. Quis blandit turpis cursus in. Dapibus ultrices in iaculis nunc.'
  },
  PO: {
    name: 'Pure Organtic',
    image: PO_Logo,
    text: 'Vitae nunc sed velit dignissim sodales ut eu sem. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Vitae elementum curabitur vitae nunc sed velit dignissim. Habitant morbi tristique senectus et netus. Tellus molestie nunc non blandit massa enim nec dui. Sit amet dictum sit amet justo. Vivamus arcu felis bibendum ut tristique et egestas quis.'
  },
  HP: {
    name: 'High Profile',
    image: HP_Logo,
    text: 'Sed arcu non odio euismod lacinia at quis risus. Erat velit scelerisque in dictum. Arcu cursus euismod quis viverra nibh cras. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Augue mauris augue neque gravida in fermentum et sollicitudin. Et netus et malesuada fames ac turpis egestas.'
  },
  TE: {
    name: 'TerpeneXpress',
    image:TE_Logo,
    text: 'Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit. Eget est lorem ipsum dolor sit amet. Mauris pharetra et ultrices neque ornare. Cum sociis natoque penatibus et magnis. Interdum posuere lorem ipsum dolor sit amet consectetur. Lobortis feugiat vivamus at augue. Eu consequat ac felis donec. Sit amet consectetur adipiscing elit duis tristique sollicitudin.'
  },
  PP: {
    name: 'Pawsitive Pets',
    image:PP_Logo,
    text:'Faucibus purus in massa tempor nec feugiat. Eu ultrices vitae auctor eu. Nulla pharetra diam sit amet. Dolor sit amet consectetur adipiscing elit duis. Ornare lectus sit amet est.'
  }
}

export default function Brands(props) {
  const [visibleBrand, setVisibleBrand] = useState(null)


  return (
    <div className="OurBrands">
      <h1>Our Brands</h1>
      <p>Essential Brands is an international enterprise looking to become a leader and a jack of all trades in the cannaboid industry. Because of this, our product line is split into multiple brands that each serve their own purpose.</p>
      <div className="BrandButtons">
        <button className="BrandButton" onClick={()=>setVisibleBrand('FG')}><img className="BrandButtonImage" src={FG_Header} alt="logo"/></button>
        <button className="BrandButton" onClick={()=>setVisibleBrand('PO')}><img className="BrandButtonImage" src={PO_Header} alt="logo"/></button>
        <button className="BrandButton" onClick={()=>setVisibleBrand('TE')}><img className="BrandButtonImage" src={TE_Header} alt="logo"/></button>
        <button className="BrandButton" onClick={()=>setVisibleBrand('HP')}><img className="BrandButtonImage" src={HP_Header} alt="logo"/></button>
        <button className="BrandButton" onClick={()=>setVisibleBrand('PP')}><img className="BrandButtonImage" src={PP_Logo} alt="logo"/></button>
      </div>
      <div className="Brands">
      {visibleBrand ? (
        <div className="Brand">
          <h2>{brands[visibleBrand].name}</h2>
          <div className="BrandContent">
            <p>{brands[visibleBrand].text}</p>
            <img className="Logo" src={brands[visibleBrand].image} alt="logo"/>
          </div>
        </div>
      ) : (
        <p>Click on a Logo Above to Find Out More About the Brand!</p>
      )}

      </div>
    </div>
  )
}