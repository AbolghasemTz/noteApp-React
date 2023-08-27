import React from 'react'
import NoteItem from './NoteItem';

function NoteList({notes,onDeleteNote,onCompleted,sortBy}) {

    let sortedNotes = notes;
    if(sortBy === "earliest") 
    sortedNotes = [...notes].sort((a,b) => new Date(a.createdAt) - new Date(b.createdAt) )
   
    if(sortBy === "latest") 
    sortedNotes = [...notes].sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt) )
    if(sortBy === "completed") 
    sortedNotes =  [...notes].sort((a,b) => Number(a.completed) - Number(b.completed) )
  return (
    <div className='note-list'>
      {sortedNotes.map((n) => {
        return <NoteItem key={n.id} note={n} onDeleteNote={onDeleteNote} onCompleted={onCompleted}/>
      })}
    </div>
  )
}

export default NoteList
