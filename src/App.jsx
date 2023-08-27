import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
function App() {
  const [notes, setNotes] = useState([]);

  const handelNote = (newNote) => {
    setNotes((prevState) => [...prevState, newNote]);
  };

  const handleDeleteNote = (id) => {
    // const filteredNotes = notes.filter((n) => n.id !== id);
    // setNotes(filteredNotes)
    setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));
  };
  const handelToggleNote = (e) => {
    const noteId = Number(e.target.value);
    // const newNotes = notes.map((note) =>
    //   note.id === noteId ? { ...note, completed: !note.completed } : notes
    // );
    // setNotes(newNotes)
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === noteId ? { ...note, completed: !note.completed } : note
      )
    );
  };
  return (
    <div className="container">
      <div className="note-header">note header</div>
      <div className="note-app">
        <AddNewNote addNote={handelNote} />
        <div className="note-container">
          <NoteList
            notes={notes}
            onDeleteNote={handleDeleteNote}
            onCompleted={handelToggleNote}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
