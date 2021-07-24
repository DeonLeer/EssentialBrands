import React from 'react';
import './Entourage.css';
import EntourageImage from '../../images/EntourageEffect.png';
export default function Entourage(props) {
  return (
    <div className="Entourage">
      <h1>Entourage Effect</h1>
      <img className="EntourageImage" src={EntourageImage} alt="Entourage Effect Graphic" />
      <p className="EntourageText">Despite the complicated name, the entourage effect is fairly easy to understand. It refers to the synergy achieved by all the components in cannabis. These components work together to enhance the potential benefits of the plant. Each compound can amplify the therapeutic properties of the others while mitigating their potential side effects</p>
    </div>
  )
}