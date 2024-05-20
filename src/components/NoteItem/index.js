import {Details, Title, ListItem} from './styledComponents'

function NoteItem(props) {
  const {details} = props
  const {title, notes} = details
  return (
    <ListItem>
      <Title>{title}</Title>
      <Details>{notes}</Details>
    </ListItem>
  )
}

export default NoteItem
