import React from 'react'
import NoteInput from './NoteInput';
import SearchInput from './SearchInput';
import ToggleArchiveButton from './ToggleArchiveButton';

function NavigationBar ({toggleShowArchive, showArchiveState, toggleAddNewNote}) {
  return (
    <div className='note-app__navigation-bar'>
      <SearchInput/>
      <NoteInput toggleAddNewNote={toggleAddNewNote}/>
      <ToggleArchiveButton toggleShowArchive={toggleShowArchive} showArchiveState={showArchiveState}/>
    </div>
  );
}

export default NavigationBar;