import React from "react";
import icon from './icon.png';
import insta from './insta.png';
import tele from './tele.png';
import global from './global.png';

const Navicon = () => {
    return ( 
  <div className="row">
    <div className="column">
    <img id="icon" src={icon} alt="icon"/>
    <div className="icons">
    <img id="icons" src={insta} alt="icon"/>
    <img id="icons" src={tele} alt="icon"/>
    <img id="icons" src={global} alt="icon"/></div>
    
    </div>
  </div>
     );
}
 
export default Navicon;