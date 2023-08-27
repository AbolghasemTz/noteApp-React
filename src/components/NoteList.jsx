import React from 'react'
import NoteItem from './NoteItem';

function NoteList({notes,onDeleteNote,onCompleted}) {
    console.log(notes);
  return (
    <div className='note-list'>
      {notes.map((n) => {
        return <NoteItem key={n.id} note={n} onDeleteNote={onDeleteNote} onCompleted={onCompleted}/>
      })}
    </div>
  )
}

export default NoteList
