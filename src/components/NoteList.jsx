import React from 'react'
import NoteItem from './NoteItem';

function NoteList({notes}) {
    console.log(notes);
  return (
    <div className='note-list'>
      {notes.map((n) => {
        return <NoteItem key={notes.id} note={n}/>
      })}
    </div>
  )
}

export default NoteList
