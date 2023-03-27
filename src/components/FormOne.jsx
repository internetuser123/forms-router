import React, { useState, useContext } from 'react'
import { useForm } from "react-hook-form"
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import styles from './FormOne.module.css'
import { useNavigate} from 'react-router-dom'
import { FormContext } from '../App'
import { Input, Button, Box } from '@chakra-ui/react'





const FormOne = () => {

  const {formData, setFormData} = useContext(FormContext)

  const navigate = useNavigate()

  const schema = yup.object().shape({
    firstName: yup.string().required("* Your name is required"),
    lastName: yup.string().required("* Your last name is required"),
    email: yup.string().email().required("* Your email is required"),
    phone: yup.number().test('len', "* Your number needs to have 10 digits", val => val.toString().length === 10).typeError("* Your number needs to have 10 digits")
  })

    const {register, handleSubmit, formState: {errors} } = useForm({
      resolver: yupResolver(schema)
    })

    

    const onSubmit = (data) => {
      setFormData({...data})
      navigate('/formTwo')
    }

  return (
    <Box width="100vw" height='100vh' display='flex' justifyContent='center' alignItems='center'>
      <Box display='flex' flexDirection='column' alignItems='center' backgroundColor='blackAlpha.100' border='1px' borderColor='black' width='500px' height='500px' borderRadius='1rem'>
          <h1>Enter your information here:</h1>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>          
            <Input placeholder="First Name..." m="0.5rem" type="text" backgroundColor='white'  {...register("firstName")} />
            <p className={styles.error}>{errors.firstName?.message}</p>
            <Input placeholder="Last Name..." m="0.5rem" type="text" backgroundColor='white' {...register("lastName")} />
            <p className={styles.error}>{errors.lastName?.message}</p>
            <Input className={styles.input} m="0.5rem" type="text" backgroundColor='white' placeholder='Email...'{...register("email")}/>
            <p className={styles.error}>{errors.email?.message}</p>
            <Input className={styles.input} m="0.5rem" type="number" backgroundColor='white' placeholder='Phone...' {...register("phone")}/>
            <p className={styles.error}>{errors.phone?.message}</p>
            <Button colorScheme='teal' m="0.5rem" type='submit' marginTop='auto' >Submit</Button>
        </form>
      </Box>
    </Box>
  )
}

export default FormOne