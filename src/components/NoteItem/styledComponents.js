import styled from 'styled-components'

export const ListItem = styled.li`
  border: 1px solid #aab8c8;
  border-radius: 8px;
  margin-left: 8px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  color: #334155;
  width: 30%;
  min-height: 180px;
  @media (max-width: 767px) {
    width: 100%;
  }
`

export const Details = styled.p`
  margin: 0;
  line-height: 1.5;
`

export const Title = styled.h1`
  margin: 0 0 22px 0;
`
