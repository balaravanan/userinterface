import React, {useState} from 'react'
import Hamburger from 'hamburger-react'


function Sidebar() {
    const [isOpen, setOpen] = useState(false)
    return (
        <div>
            <h3>Jai Hamburger Menu</h3>
            <div style={{marginLeft:"750px"}}>
            <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
        </div>
    )
}

export default Sidebar
