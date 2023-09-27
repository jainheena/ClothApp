import React from 'react'
import './End.css'
import footimg from '../assets/footer.png'
import send from '../assets/Button.png'

function End() {
  return (
    <div className='end'>
        <img className='footimg' src={footimg} alt="" />
        <p className='nwl'>Newsletter</p>
        <p className='getnws'>Get news about articles and updates in your inbox.</p>
        <h1 className='git'>GET <br />IN TOUCH </h1>
        <form className='form' action="">
            <input className='name' type="text" placeholder='  NAME' />
            <input className='email' type="email" name="email" id="" placeholder='  EMAIL' />
            <input className='msg' type="text" name="text" id="" placeholder='  MESSAGE'/>
        </form>
        <div className='snd' onClick="">
        <img id='send' className='send' src={send} alt="" />
        </div>
    </div>
  )
}

export default End