import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faYoutube} from '@fortawesome/free-brands-svg-icons'
function Nav({setInput}) {
    const changeHandler = (e) => {
        setInput(e.target.value)
      }
    return (
        <nav>
            <FontAwesomeIcon className = 'icon' size = '2x' icon = {faYoutube} />
            <label htmlFor="icon">Youtube</label>
            <input type="text" onChange = {changeHandler} placeholder = 'search youtube...'/>
        </nav>
    )
}

export default Nav
