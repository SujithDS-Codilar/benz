import img1 from "./search1.png";
import img2 from "./menu0.jpeg";
import './menu.css';

function Menu() {
  return (
    <>
      <div className="nav_elements">
        <ul>
          <li>Company</li>
          <li>Vehicles</li>
          <li>Design</li>
          <li>Innovation</li>
          <li>Museum & History</li>
          <li>Sports</li>
          <li>Events</li>
          <li>Lifestyle</li>
          <li><img src={img1} alt="" className="list_img" /></li>
        </ul>
      </div>
      <div className="sujith">
        <div className="head_top">
          <div className="head_top1">
            <p>i</p>
          </div>
          <p className="p">Provider / Privacy Statement</p>
          <div className="head_r">
            <p>Deutsch</p>
          </div>
        </div>
      </div>

      <div className="menu_bar">
        <img src={img2} alt="menu bar not found" />
      </div>
      <div className="menu_search">
        <img src={img1} className="sr" alt="search img not found" />
      </div>
    </>
  )
}

export default Menu;