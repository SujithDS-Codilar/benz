import Image from "./logo.svg";
import Image1 from "./brand.jpeg";
import './logo.css';

function Logo() {
    return (
        <div className="brandhub_header">
        <span className="logo"><img src={Image} alt="logo not found" /></span>
        <span><img src={Image1} className="brand_name" alt="brand name not found" /></span>
      
    </div>
    );
}

export default Logo;