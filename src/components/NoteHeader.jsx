import React, { useState } from "react";

function NoteHeader({ notes, sortBy, onSort }) {
 
  return (
    <div className="note-header">
      <h2>My Note ({notes.length})</h2>

      <select
        value={sortBy}
        onChange={onSort}
        name=""
        id=""
      >
        <option value="latest">Sort based on latest note</option>
        <option value="earliest">Sort based on earliest note</option>
        <option value="completed">Sort based on completed note</option>
      </select>
    </div>
  );
}

export default NoteHeader;
