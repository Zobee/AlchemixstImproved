import React, {useState,useEffect} from 'react'
import {Link, useLocation} from 'react-router-dom'

import ToggleButton from './ToggleButton'
import Dropdown from './Dropdown'

function Header() {
    let location = useLocation()
    useEffect(() => {
      setToggleDropdown(false)
    },[location])
    const [toggleDropdown, setToggleDropdown] = useState(false)

    return (
        <div>
        <header className='navbar'>
            <nav className='navbar-nav'>
                <div className='navbar-brand'>
                    <Link to='/'>DOUGH JOE</Link>
                </div>
                <div className='space'></div>
                <div className='navbar-nav-links'>
                    <ul>
                        <li><Link to='/pad'>Drum Pad</Link></li>
                        {/* <li><Link to='/beats'>Beats</Link></li> */}
                        <li><Link to='/store'>Merch</Link></li>
                    </ul>
                </div>
                <div>
                    <ToggleButton setToggleDropdown={setToggleDropdown}/>
                </div>
            </nav>
        </header>
        <Dropdown toggleDropdown={toggleDropdown}/>
        </div>
    )
}

export default Header
