import {useState} from 'react'
import NoteItem from '../NoteItem'

import {
  BgContainer,
  MainHeading,
  FormContainer,
  InpTitle,
  NotesList,
  NoItemDesc,
  NoItemHead,
  ImageEl,
  NoItemsView,
  AddBtn,
  TextArea,
} from './styledComponents'

function Notes() {
  const [title, setNotesTitleDetails] = useState('')
  const [notes, setNotesDetails] = useState('')
  const [notesItems, updateNotes] = useState([])

  const updateTitle = event => setNotesTitleDetails(event.target.value)

  const updateNote = event => {
    setNotesDetails(event.target.value)
  }

  const addNoteItem = event => {
    event.preventDefault()
    const id = notesItems.length + 1
    const newItem = {
      title,
      notes,
      id,
    }
    if (title === '' || notes === '') {
      alert('Enter Valid Title and Notes!!')
      return
    }
    updateNotes([...notesItems, newItem])
    setNotesDetails('')
    setNotesTitleDetails('')
  }

  const listItemsView = () => {
    if (notesItems.length === 0) {
      return (
        <NoItemsView>
          <ImageEl
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <NoItemHead>No Notes Yet</NoItemHead>
          <NoItemDesc>Notes you add will appear here</NoItemDesc>
        </NoItemsView>
      )
    }
    return (
      <NotesList>
        {notesItems.map(eachItem => (
          <NoteItem key={eachItem.id} details={eachItem} />
        ))}
      </NotesList>
    )
  }

  return (
    <BgContainer>
      <MainHeading>Notes</MainHeading>
      <FormContainer onSubmit={addNoteItem}>
        <InpTitle
          type="text"
          onChange={updateTitle}
          value={title}
          placeholder="Title"
        />
        <TextArea
          type="text"
          value={notes}
          onChange={updateNote}
          placeholder="Take a Note..."
          rows="4"
          cols="*"
        />
        <AddBtn type="submit">Add</AddBtn>
      </FormContainer>
      {listItemsView()}
    </BgContainer>
  )
}

export default Notes
