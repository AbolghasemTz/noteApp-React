import React from 'react'

function NoteItem({note}) {

    const options = {
        year: "numeric",
        month:"long",
        day:"numeric"

    }
  return (
    <div className='note-item'>
     <div className="note-item__header">
        <div className="">
            <p className='title'>{note.title}</p>
            <p className='description'>{note.description}</p>
        </div>
        <div className="actions">
            <button>x</button>
            <input type="checkbox" name="" id="" />
        </div>
     </div>
     <div className="note-item__footer">
        {new Date(note.createdAt).toLocaleDateString('en-US',options)}
     </div>
    </div>
  )
}

export default NoteItem
