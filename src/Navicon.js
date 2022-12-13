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
    <a href="https://www.linkedin.com/company/dinger/mycompany/" target="_blank"><img id="icons" src={insta} alt="linked" /></a>
    <a href="https://t.me/dingerasia" target="_blank"><img id="icons" src={tele} alt="linked" /></a>
    <a href="https://dinger.asia/" target="_blank"><img id="icons" src={global} alt="linked" /></a>
    </div>
    
    </div>
  </div>
     );
}
 
export default Navicon;