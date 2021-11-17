import sideimg1 from './car.jpeg';
import sideimg2 from './car_1.png';
import sideimg3 from './share.png';
import './side_nav.css'



function SideNav(){
    return(
        <div className="side_nav" id="mySidenav">
      <a href="#" id="car"><img src={sideimg1} alt="" />Product Page</a>
      <a href="#" id="car_settings"><img src={sideimg2} alt="" />Configurator</a>
      <a href="#" id="share"><img src={sideimg3} alt="" /> </a>
    </div>
    );

}

export default SideNav;