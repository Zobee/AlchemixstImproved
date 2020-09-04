import React from 'react'
import Panel from './Panel'
import panels from './panels'

function PanelContainer() {
    return (
        <div className='home-content'>
            {panels.map(panel => <Panel id={panel.id} name={panel.name}/>)}
        </div>
    )
}

export default PanelContainer
