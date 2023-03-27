import React from 'react'
import { useForm } from "react-hook-form"
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import styles from './FormTwo.module.css'
import { useNavigate} from 'react-router-dom'
import { FormContext } from '../App'
import { useContext } from 'react'
import { Input, Button, Box, Checkbox } from '@chakra-ui/react'


const FormTwo = () => {

  const {formData, setFormData} = useContext(FormContext)


  const navigate = useNavigate()

  const schema = yup.object().shape({
    adress: yup.string().required("* Adress is required"),
    zipcode: yup.number().test('len,', '* Must be exactly 5 digits', val => val.toString().length === 5).typeError("* Must be exactly 5 digits"),
    city: yup.string().required("* City is required"),
    terms: yup.boolean().oneOf([true], "* You need to accept the terms and conditions"),
    
  })

    const {register, handleSubmit, formState: {errors} } = useForm({
      resolver: yupResolver(schema)
    })

    

    const onSubmit = (data) => {
      const {firstName, lastName, email, phone} = formData
      setFormData({...data, firstName, lastName, email, phone})
      navigate("/result")
    }

  return (
    <Box width="100vw" height='100vh' display='flex' justifyContent='center' alignItems='center'>
      <Box display='flex' flexDirection='column' alignItems='center' backgroundColor='blackAlpha.100' border='1px' borderColor='black' width='500px' height='500px' borderRadius='1rem'>
          <h1>Enter your information here:</h1>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <Input m="0.5rem" type="text" backgroundColor='white' placeholder='Adress...' {...register("adress")} />
            <p className={styles.error}>{errors.adress?.message}</p>
            <Input m="0.5rem" type="text" backgroundColor='white' placeholder='Zipcode' {...register("zipcode")} />
            <p className={styles.error}>{errors.zipcode?.message}</p>
            <Input m="0.5rem" type="text" backgroundColor='white' placeholder='City'{...register("city")}/>
            <p className={styles.error}>{errors.city?.message}</p>
            <p>I accept the terms and conditions <Checkbox m="0.5rem" backgroundColor='white' type="checkbox" {...register("terms")}/></p>
            <p className={styles.error}>{errors.terms?.message}</p>
            <Button colorScheme='teal' m="0.5rem" type='submit' marginTop='auto'>Submit</Button>
        </form>
      </Box>
    </Box>
  )
}

export default FormTwo