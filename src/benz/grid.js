import grid16 from './grid16.jpg';
import grid2 from './grid2.jpeg';
import grid3 from './grid3.jpeg';
import grid4 from './grid4.jpeg';
import grid5 from './grid5.jpeg';
import grid6 from './grid6.jpeg';
import grid7 from './grid7.jpeg';
import grid8 from './grid8.jpeg';
import grid9 from './grid9.jpeg';
import grid19 from './grid19.jpg';
import grid11 from './grid11.jpeg';
import grid12 from './grid12.jpeg';
import grid13 from './grid13.jpeg';
import grid14 from './grid14.jpeg';
import grid17 from './grid17.jpg';
import grid18 from './grid18.jpg';
import './grid.css';


function Grid() {
  return (
    <div className="image-grids">
      <div className="first-grid">
        <div className="left-first-grid">
          <img src={grid16} alt="grid1" />
          <div className="grid1_cont">The Mercedez-Benz SL.</div>
        </div>
        <span className="right-first-grid">
          <img src={grid2} alt="grid2" />
          <img src={grid3} alt="grid3" />
          <img src={grid17} alt="grid17"/>
        </span>
      </div>
      <div className="second-grid">
        <img src={grid4} alt="grid4" />
        <img src={grid5} alt="grid5" />
        <img src={grid6} alt="grid6" />
      </div>
      <div className="third-grid">
        <img src={grid7} alt="grid7" />
        <img src={grid8} alt="grid8" />
        <img src={grid9} alt="grid9" />
      </div>
      <div className="fourth-grid">
        <div className="left-fourth-grid">
          <img src={grid19} alt="grid19" />
        </div>
        <div className="right-fourth-grid">
          <img src={grid11} alt="grid11" />
          <img src={grid12} alt="grid12" />
        </div>
      </div>
      <div className="fifth-grid">
        <img src={grid13} alt="grid13" />
        <img src={grid14} alt="grid14" />
        <img src={grid18} alt="grid18"/>
      </div>
    </div>
  )
};
export default Grid;