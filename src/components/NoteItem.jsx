import React from "react";

function NoteItem({ note, onDeleteNote, onCompleted }) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <div key={note.id} className={`note-item ${note.completed ? "completed" : ""}`}>
      <div className="note-item__header">
        <div className="">
          <p className="title">{note.title}</p>
          <p className="description">{note.description}</p>
        </div>
        <div className="actions">
          <button onClick={() => onDeleteNote(note.id)}>x</button>
          <input
            type="checkbox"
            name=""
            id={note.id}
            value={note.id}
            onChange={onCompleted}
            checked={note.completed}
          />
        </div>
      </div>
      <div className="note-item__footer">
        {new Date(note.createdAt).toLocaleDateString("en-US", options)}
      </div>
    </div>
  );
}

export default NoteItem;
