import { useContext } from "react";
import { NotesContext } from "../contexts/NotesContext";

function NoteDeleteBtn({id}) {

    let { remove } = useContext(NotesContext);

    return (
        <button onClick={e => remove(id)}>
            Delete
        </button>
    )
}

export default NoteDeleteBtn;