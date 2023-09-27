import React from 'react'
import './middle.css'
import sline from '../assets/Sline.png'
import ar1 from '../assets/Arrow1.png'
import ar2 from '../assets/Arrow2.png'
import CardSlider from './CardSlider'

function Middle(item) {
  return (
    <>
        <h2 className='np'>New products</h2>
        <img className='sline' src={sline} alt="" />
        <ul className='aab'>
            <li className='aprl'>Apparel</li>
            <li className='acs'>Accessories</li>
            <li className='bst'>Best sellers</li>
            <li className='off'>50% off</li>
        </ul>
        <CardSlider/>
    </>
  )
}
export default Middle
