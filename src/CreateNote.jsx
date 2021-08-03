import React,{useState} from "react"
import { nanoid } from 'nanoid'
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateNote(props){
    const [isZoom,setZoom]=useState(false)

    const[note,setNote]=useState({
        title:'',
        content:'',
       
    })
    function handleInput(e){
        
        const {name,value}=e.target
        
        setNote(prevNote=>{
            return{
                ...prevNote,
                [name]:value
            }
        })
        
    }

    function handleAdd(e){
        props.addNote(note.title,note.content)
        e.preventDefault()
    }
    function handleZoom(){
        setZoom(true)
    }


    return(
        <div class="form">
            <form class="create-note">
                {isZoom&& 
                    <input onChange={handleInput} 
                    placeholder="Title" 
                    name="title" 
                    value={note.title}
                />}
               
                <textarea onClick={handleZoom}
                    onChange={handleInput} 
                    placeholder="Your Note..." 
                    name="content" 
                    value={note.content}
                    rows={isZoom?'3':'1'}
                    />
                <Zoom in={isZoom}>
                    <Fab onClick={handleAdd}><AddIcon/></Fab>
                </Zoom>
                
            </form>
        </div>
    )

}

export default CreateNote 