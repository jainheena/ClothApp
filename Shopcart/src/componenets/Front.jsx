import React from 'react'
import './front.css'
import truck from"../assets/Truck.png"
import linkedin from "../assets/linkedin.png"
import ig from "../assets/Instagram.png"
import fb from "../assets/fb.png"
import twtr from "../assets/twttr.png"
import vLine from "../assets/verLine.png"
function front() {
  return (
    <div className='front'>
      <img className='truck' src={truck} alt="" />
      <p className='fd'>Free Delivery</p>
      <img className='vLine' src={vLine} alt="" />
      <p className='rpol'>Return Policy</p>
      <a className='login' href="">Login</a>
      <p className='folow'>Follow US</p>
      <a href=""><img className='fb' src={fb} alt="" /></a>
      <a href=""><img className='linkedin' src={linkedin} alt="" /></a>
      <a href=""><img className='twtr' src={twtr} alt="" /></a>
      <a href=""><img className='ig' src={ig} alt="" /></a>
    </div>
  )
}
export default front
