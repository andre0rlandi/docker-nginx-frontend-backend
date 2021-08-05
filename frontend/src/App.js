import React, { useEffect, useState } from 'react'
import '@atlaskit/css-reset';
import styled from 'styled-components'

// API
import api from './api'

const MessageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`


const App = () => {

  const [message, setMessage] = useState()

  const getMessage = async () => {
    await api.getMessage().then(message => {
      setMessage(message.data)
    })
  }

  useEffect(() => {
    getMessage()
  }, [])

  return (
    <React.Fragment>
      <MessageWrapper>
        <h1>{message}</h1>
      </MessageWrapper>
    </React.Fragment>
  )
}

export default App;
