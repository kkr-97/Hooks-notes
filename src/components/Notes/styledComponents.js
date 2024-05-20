import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 37px;
  height: 100vh;
  overflow: auto;
`

export const MainHeading = styled.h1`
  font-family: 'Bree Serif';
  color: #4c63b6;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 75%;
  box-shadow: 2px 2px 3px 2px #888;
  border-radius: 4px;
  padding: 12px;
  margin-bottom: 16px;
  @media (max-width: 767px) {
    width: 100%;
  }
`

export const InpTitle = styled.input`
  border-width: 0;
  outline: none;
  padding: 12px;
  margin-bottom: 16px;
`

export const TextArea = styled.textarea`
  border-width: 0;
  outline: none;
  padding: 12px;
  margin-bottom: 16px;
`

export const AddBtn = styled.button`
  align-self: flex-end;
  background-color: #4c63b6;
  color: #ffffff;
  padding: 12px;
  border-width: 0;
  cursor: pointer;
  border-radius: 3px;
`

export const NoItemsView = styled.div`
  text-align: center;
  color: #334155;
`

export const ImageEl = styled.img`
  width: 220px;
`

export const NoItemHead = styled.h1`
  font-size: 29px;
`

export const NoItemDesc = styled.p``

export const NotesList = styled.ul`
  width: 75%;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 767px) {
    width: 100%;
  }
`
