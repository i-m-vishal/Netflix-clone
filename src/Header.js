import React, { useEffect, useState } from 'react';
import "./Header.css";


function Header() {
    const [show, setShow] =useState(false);

    useEffect(() => {
        window.addEventListener("scroll",()=> {
                if (window.scrolly > 100) {
                    setShow(true);
                } else {
                    setShow(false);
                }
            });

        return () => {
            window.removeEventListener("scroll")
        }
     },[]);
    return (
        <div className={`header ${show && "header_black"}`}>
       <img className="header_logo" 
       src="/image/image.png" alt=""/>
       <img className="user_icon"
        src="/image/usericon.png" alt=""/>
            
        </div>
    )
}

export default Header;
