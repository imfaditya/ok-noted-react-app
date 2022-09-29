import React from "react";
import addIcon from '../images/add-icon.svg'

function NewNoteButton ({toggleAddNewNote}) {
  return (
    <button className='btn navigation-bar__new-note' onClick={() => toggleAddNewNote()}><p>New Note</p><img src={addIcon} alt="add-icon"/></button>
  );
}

export default NewNoteButton;