import React from "react";
import htet from './htet.png';
import './style.css';
import Navicon from "./Navicon";
import "@fontsource/poppins";
import mail from './mail.png';
import linked from './linked.png';
import phone from './phone.png';
import home from './home.png';
import comma from './comma.png';

const Htet = () => {
    return ( 
        <div>
            <div className="background">
            <Navicon />
            <div className="infos">
                 <h2>Mr. Htet Arkar Kyaw</h2>
                 <p id="pos">FOUNDER & CEO</p>
                 <img id="logo" src={mail} alt="mail" />
                 <p>htet@dinger.asia</p>
                 <img id="logo" src={linked} alt="linked" />
                 <p>Htet Arkar Kyaw</p>
                 <img id="logo" src={phone} alt="phone" />
                 <p>(+95) 95067051</p>
                 <img id="logo" src={home} alt="home" />
                 <p>No [647], Corner of 21st Street, 6th <br /> floor, China Town Hotel, Latha <br /> Township, Yangon.</p>
                 <img id="logo" src={comma} alt="comma" />
                 <p>Lorem ipsum dolor sit amet <br /> consectetur.</p>    
                 </div>
                <div className="inner-block">
                 <img id="pf" src={htet} className="App-logo" alt="logo" />
                </div>
            </div>
        </div>
     );
}
 
export default Htet;