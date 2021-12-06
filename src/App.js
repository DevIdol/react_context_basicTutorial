import React from 'react'
import { context } from './context'
import Header from './components/Header'

const App = () => {
  return (
    <context.Provider value="Hello React Context">
      <Header />
    </context.Provider>
  )
}

export default App;
