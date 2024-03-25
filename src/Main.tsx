import styled from '@emotion/styled'
import React from 'react'
import { createRoot } from 'react-dom/client'

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`
createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)
