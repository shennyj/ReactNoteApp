import React from "react"
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';


function Note(props){
   
    return(
        <div class="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <div class="note-footer">
                <small>{props.date}</small>
                <button onClick={()=>props.handleDelete(props.id)}><DeleteIcon/></button>
            </div>
        </div>
    )

}
export default Note