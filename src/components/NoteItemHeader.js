import React from 'react'

function NoteItemHeader ({title, createdAt}) {
  return (
    <header className='note-item__header'>
      <h4>{title}</h4>
      <p>{createdAt}</p>
    </header>
  );
}

export default NoteItemHeader;