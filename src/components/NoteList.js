import React from "react";
import NoteItem from "./NoteItem";

function NoteList ({notes, onDelete, toggleArchive, showArchiveState}) {
  let filteredNote;

  if(showArchiveState){
    filteredNote = notes.filter((note) => note.archived === true);
  } else if (!showArchiveState) {
    filteredNote = notes.filter((note) => note.archived === false);
  }

  return (
    <div className="note-list">
      {
        filteredNote.map((note) => {
          return (<NoteItem key={note.id} {...note} onDelete={onDelete} toggleArchive={toggleArchive} archiveStatus={note.archived}/>)
        })
      }
    </div>
  )
}

export default NoteList;