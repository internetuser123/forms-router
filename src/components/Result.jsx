import React from 'react'
import { useContext } from 'react'
import { FormContext } from '../App'
import styles from './Result.module.css'
import { Box, Text, Button } from '@chakra-ui/react'

const Result = () => {

  

  const {formData, setFormData} = useContext(FormContext)

  console.log("formdata", formData)

  return (
    <Box width="100vw" height='100vh' display='flex' justifyContent='center' alignItems='center'>
      <Box display='flex' flexDirection='column' alignItems='center' backgroundColor='blackAlpha.100' border='1px' borderColor='black' width='500px' height='500px' borderRadius='1rem'>
        <Text fontSize='2xl'>Confirm your information:</Text>
        <Box marginRight='auto' display='flex' flexDirection='column'>
          <Text fontSize='xl' m='0.5rem'>Name: {formData.firstName}</Text>
          <Text fontSize='xl' m='0.5rem'>Last Name: {formData.lastName}</Text>
          <Text fontSize='xl' m='0.5rem'>Phone: {formData.phone}</Text>
          <Text fontSize='xl' m='0.5rem'>Email: {formData.email}</Text>
          <Text fontSize='xl' m='0.5rem'>Adress: {formData.adress}</Text>
          <Text fontSize='xl'm='0.5rem'>Zipcode: {formData.zipcode}</Text>
          <Text fontSize='xl' m='0.5rem'>City: {formData.city}</Text>
        </Box>
        <Button colorScheme='teal' m="0.5rem" type='submit' marginTop='auto'>Confirm</Button>
      </Box>
    </Box>
  )
  
}

export default Result