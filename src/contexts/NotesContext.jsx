import { createContext } from "react";
import useNotes from "../hooks/useNotes";

export const NotesContext = createContext();

export function NotesProvider({children}) {

    const { notes, add, remove } = useNotes();

    return(
        <NotesContext.Provider value={{ notes: notes, add: add, remove: remove }}>
            { children }
        </NotesContext.Provider>
    )
}