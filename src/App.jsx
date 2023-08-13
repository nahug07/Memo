import './App.css'
import { NotesProvider } from './contexts/NotesContext'
import NotesForm from './notes/NotesForm'
import NotesList from './notes/NotesList'

function App() {


  return (
    <>
      <NotesProvider>
        <NotesForm />
        <NotesList />
      </NotesProvider>
    </>
  )
}

export default App
