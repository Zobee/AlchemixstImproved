import React from 'react'
import {Link} from 'react-router-dom'

const Dropdown = ({toggleDropdown}) => {
    let open = toggleDropdown ? "open" : ""
    return (
        <nav>
            <ul className={`dropdown ${open}`}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/pad'>Drum Pad</Link></li>
                {/* <li><Link to='/beats'>Beats</Link></li>
                <li><Link to='/store'>Merch</Link></li> */}
            </ul>
        </nav>
        
    )
}

export default Dropdown
