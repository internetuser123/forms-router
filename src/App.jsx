import React, { createContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import FormOne from './components/FormOne'
import FormTwo from './components/FormTwo'
import Result from './components/Result'

export const FormContext = createContext()


const App = () => {

  const [formData, setFormData] = useState({})

  return (
    <BrowserRouter>
      <FormContext.Provider value={{formData, setFormData}}>
        <Routes>        
          <Route path="/" element={<FormOne/>} />
          <Route path="/formTwo" element={<FormTwo/>} />
          <Route path="/result" element={<Result/>} />        
        </Routes>
      </FormContext.Provider>
    </BrowserRouter>
  )
}

export default App