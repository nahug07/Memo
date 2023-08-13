import { useContext } from "react";
import Note from "./Note";
import { NotesContext } from "../contexts/NotesContext";

function NotesList() {

    const { notes } = useContext(NotesContext)

    return (
        <div>
            <p>{notes.length} notes</p>
            {
                notes.map(note => <Note key={note.id} title={note.title} message={note.title} id={note.id}/>)
            }
        </div>
    ) 
}

export default NotesList;