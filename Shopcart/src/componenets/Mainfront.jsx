import React, { useEffect, useState } from 'react'
import './mainfront.css'
import bigR from '../assets/Rectangle - Copy.png'
import Fline from '../assets/Fline.png' 
import boy from '../assets/jessica-radanavong-IchPBHFD0pw-unsplash.png'
import star from '../assets/Star.png'
import line from '../assets/Line.png'
import star4 from '../assets/Star4.png'
import arrow from '../assets/arrow.png'

const Navbar = ({ items }) => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (id) => {
    if (activeMenu === id) {
      setActiveMenu(null);
    } else {
      setActiveMenu(id);
    }
  };

  const renderMenuItems = (menuItems) => {
    return menuItems.map((item) => (
      <li key={item.id} className={`menu-item ${item.id === 'product' && activeMenu === 'product' ? 'active-dropdown' : ''}`}>
        <b>
        <a
          href={`#${item.id}`}
          onClick={() => handleMenuClick(item.id)}
          className={`menu-link ${activeMenu === item.id ? 'active' : ''}`}
          id={`${item.id}`}
        >
          {item.name}
        </a>
        </b>
        {item.child && activeMenu === item.id && (
          <ul  className="submenu">
            <a>{renderMenuItems(item.child)}</a><br />
          </ul>
        )}
      </li>
    ));
  };

  return (
    <nav className="navbar">
      <ul className="menu">
        {renderMenuItems(items)}
      </ul>
    </nav>
  );
};
function Mainfront() {
  const navbar = [
    { name: 'HOME', id: 'home'},
    { name: 'ABOUT', id: 'about' },
    { name: 'OUR PRODUCTS', id: 'product', child: [
    { name: 'PRODUCT 1', id: 'p1'},
    { name: 'PRODUCT 2', id: 'p2' },
    { name: 'PRODUCT 3', id: 'p3'},
    { name: 'PRODUCT 4', id: 'p4' },
    ] },
    { name: 'CONTACT US', id: 'contact'},
    ];
  return (
    <div className='bigdiv'>
        <img className='bigR' src={bigR} alt="" />
        <div>
            <p className='shpkrt'>ShopKart</p>
            <p className='wshlst'><b>WISHLIST (0)</b></p>
            <p className='bag'><b>BAG (0)</b></p>
        </div>
        <div className='fline'>
            <img src={Fline} alt="" />
        </div>
        <div className='navbar'>
        <Navbar items={navbar} />
        </div>
        <div className='smaldiv'>
          <div className='rect29'></div>
          <img className='star' src={star} alt="" />
          <img className='boy' src={boy} alt="" />
          <div className='rect31'></div>
          <p className='orj'>OREGON JACKET</p>
          <p className='a124'>$124</p>
          <img className='line' src={line} alt="" />
          <img className='star4' src={star4} alt="" />
        </div>
        <h1 className="fresh">Fresh</h1>
        <h1 className="t20">2022</h1>
        <h1 className='look'>Look</h1>
        <div className='seemore'>
          <div className='seemore1'>
            <div className='seemore2'>
              <a href='' className='smr'>See more <img className='arrow' src={arrow} alt="" /></a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Mainfront