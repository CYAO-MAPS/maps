import React, {useState} from 'react';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import Button from './Button';
import './NavBar.css'

function NavBar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick=()=>setClick(!click)
    const closeMobileMenu = () =>setClick(false)

    const showButton = () =>{
        if (window.innerWidth <=960){
            setButton(false)
        }
        else{
            setButton(true)
        }
    }

window.addEventListener('resize', showButton)

const scrollWithOffset = (el, yOffset=-80) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    // const yOffset = -80; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

    return (
        <>
        <nav className = "navbar">
            <div className = "navbar-container">
                <Link to="/" className="navbar-logo">
                    MAPS
                </Link>
                <div className = 'menu-icon' onClick={handleClick}>
                    <i className = {click ? 'fas fa-times': 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active':'nav-menu'}>
                    <li className='nav-item'>
                        <Link smooth to = '#home' scroll={el => scrollWithOffset(el, -120)} className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link smooth to = '#benefits' scroll={el => scrollWithOffset(el)} className='nav-links' onClick={closeMobileMenu}>
                            Benefits
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link smooth to = '#how' scroll={el => scrollWithOffset(el)} className='nav-links' onClick={closeMobileMenu}>
                            Technology
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link smooth to = '#market' scroll={el => scrollWithOffset(el)} className='nav-links' onClick={closeMobileMenu}>
                            Market
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link smooth to = '#team' scroll={el => scrollWithOffset(el)} className='nav-links' onClick={closeMobileMenu}>
                            Leadership
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link smooth to = '#contactus' scroll={el => scrollWithOffset(el)} className='nav-links' onClick={closeMobileMenu}>
                            Contact Us
                        </Link>
                    </li>
                </ul>
                {/* {button && <Button buttonStyle='btn--outline'> Top </Button>} */}

            </div>
        </nav>
        </>
    );
}

export default NavBar;