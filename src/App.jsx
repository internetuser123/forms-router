import React, { createContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import FormOne from './components/FormOne'
import FormTwo from './components/FormTwo'
import Result from './components/Result'
import { ChakraProvider } from '@chakra-ui/react'

export const FormContext = createContext()


const App = () => {

  const [formData, setFormData] = useState({})

  return (
    <ChakraProvider>
      <BrowserRouter>
        <FormContext.Provider value={{formData, setFormData}}>
          <Routes>        
            <Route path="/" element={<FormOne/>} />
            <Route path="/formTwo" element={<FormTwo/>} />
            <Route path="/result" element={<Result/>} />        
          </Routes>
        </FormContext.Provider>
      </BrowserRouter>
    </ChakraProvider> 
  )
}

export default App