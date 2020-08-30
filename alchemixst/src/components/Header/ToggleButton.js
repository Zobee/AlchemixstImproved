import React from 'react'

function ToggleButton({setToggleDropdown}) {
    return (
        <button className='toggle-btn' onClick={() => setToggleDropdown(prev => !prev)} >
            <div className='toggle-btn-line'/>
            <div className='toggle-btn-line'/>
            <div className='toggle-btn-line'/>
        </button>
    )
}

export default ToggleButton
