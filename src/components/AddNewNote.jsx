import React, { useState } from "react";

function AddNewNote({setNotes}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
 
  console.log(notes);
  const handelSubmit = (e) => {
    e.preventDefault();
   const newNote = {
    title,
    description,
    id:Date.now(),
    completed: false,
    createdAt:new Date().toISOString()
   }
   setTitle("")
   setDescription("")
   setNotes((prevState) => [...notes,newNote])
  };

  return (
    <div className="add-new-note">
      <h2>Add New Note</h2>
      <form className="note-form" onSubmit={handelSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          name=""
          id=""
          className="text-field"
          placeholder="Note title"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          name=""
          id=""
          className="text-field"
          placeholder="Description"
        />
        <button type="submit" className="btn btn--primary">
          Add New Note
        </button>
      </form>
    </div>
  );
}

export default AddNewNote;
