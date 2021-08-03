import React,{useState} from 'react'
import { nanoid } from 'nanoid'
import Header from "./Header"
import Footer from "./Footer"
import CreateNote from "./CreateNote"
import Search from "./Search"
import Noteslist from "./NotesList"


function App(){
    const [notes,setNotes]=useState([
        {
            id:nanoid(),
            title:'My first note',
            content:'Starting to learn react',
            date:'01/05/2020'
          },
          {
            id:nanoid(),
            title:'My second note',
            content:'Beginning to create projects ',
            date:'03/21/2020'
          },
          {
            id:nanoid(),
            title:'My third note',
            content:'Wow this is hard but exciting',
            date:'06/05/2021'
          },
    ])
    const [searchText,setSearchText]=useState('')

    

    function onAdd(title,content){
        const date = new Date().toLocaleDateString()
        const newNote={
            id:nanoid(),
            title:title,
            content:content,
            date:date
        }
        const newNotes=[...notes,newNote]
        setNotes(newNotes)
    }
    function deleteNote(id){
        
        const newNotes = notes.filter((note)=>note.id!==id)
        setNotes(newNotes)
       
    }

    return(
    <div classname="container">
        <Header/>
        <CreateNote
        addNote={onAdd}
        />
        <Search
            handleSearch={setSearchText}
        />
        <Noteslist
            notes={notes.filter(note=>
            note.title.toLowerCase().includes(searchText)
          )}
            handleDelete={deleteNote}
        />
        <Footer/>
    </div>
    )
}
export default App