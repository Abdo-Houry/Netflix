import React, { useEffect, useState } from 'react'
import "./Nav.css";

const Nav = () => {
    const [show, handleShow] = useState(false);
    useEffect(() =>{
        window.addEventListener("scroll" , () =>{
            if(window.scrollY > 100){
                handleShow(true);
            }else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, [])
  return (
    <div className={`nav ${show && "nav-block"}`}>
      {/*<img className='nav-logo' src='https://upload.wikimedia.org/wikipedia/commons/0/0f/' alt='Netflix Logo'/>*/}
      <span className='nav-logo'>Netflix</span>
      {/*<img className='nav-logo2' src='https://pbs.twimg.com/profile_images/124011999041155' alt='Netflix Logo'/>*/}
      </div>
  )
}

export default Nav
