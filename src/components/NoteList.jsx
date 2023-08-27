import React from 'react'
import NoteItem from './NoteItem';

function NoteList({notes,onDeleteNote}) {
    console.log(notes);
  return (
    <div className='note-list'>
      {notes.map((n) => {
        return <NoteItem key={n.id} note={n} onDeleteNote={onDeleteNote}/>
      })}
    </div>
  )
}

export default NoteList
