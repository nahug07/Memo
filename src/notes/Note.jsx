import NoteDeleteBtn from "./NoteDeleteBtn";

function Note({title, message, id}) {
    
    return (
        <div>
            <h2>{title}</h2>
            <p>{message}</p>
            <NoteDeleteBtn id={id}/>
        </div>
    )
}

export default Note;