import { useEffect, useState } from "react";

const LOCALSTORAGE_KEY = "MIAPP.list"

function useNotes(){

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        let localStorageSavedNotes = localStorage.getItem(LOCALSTORAGE_KEY);

        if(localStorageSavedNotes){
            setNotes(
                JSON.parse(localStorageSavedNotes)
            )
        }
    },[])

    useEffect(() => {
        if(!notes || notes.length === 0) return;
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(notes))
    }, [notes])
    

    function add(title, message){
        const id = Date.now();
        const noteObject = {
            title: title,
            message: message,
            id: id
        }
        setNotes([noteObject, ...notes]);
    }

    function remove(id){
        let newNotes = notes.filter(note => note.id !== id);
        setNotes(newNotes);
    }

    return {
        notes, 
        add,
        remove
    }
        
}

export default useNotes;

