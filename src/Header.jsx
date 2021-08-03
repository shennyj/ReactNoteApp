import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStickyNote } from '@fortawesome/free-solid-svg-icons'
function Header(){
    return(
        <header>
            <h1>Note-App</h1>
            <p><FontAwesomeIcon icon={faStickyNote} size="lg"/></p>
        </header>
    )
}
export default Header