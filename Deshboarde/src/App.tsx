import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import './App.css'
import Layout from './conponentes/layout/layout'

const App:REACT.FC = () => {
  

  return (
   <BrowserRouter>
      <Layout></Layout>
   </BrowserRouter>
  
  )
}

export default App
