import React from "react"
import Note from "./Note"

function NotesList(props){
    return(
        <div className='notes-list'>
            {props.notes.map(note=>{
                return <Note
                    id={note.id}
                    title={note.title}
                    content={note.content}
                    date={note.date}
                    handleDelete={props.handleDelete}
                />
            })}
            
        </div>
    )
}


export default NotesList 