import React from 'react'
import { useForm } from "react-hook-form"
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'


const FormOne = () => {

  const schema = yup.object().shape({
    firstName: yup.string(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.number().required()
  })

    const {register, handleSubmit} = useForm({
      resolver: yupResolver(schema)
    })

    

    const onSubmit = (data) => {
        console.log("onSubmit", data)
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder='First Name...' {...register("fullName")} />
        <input type="text" placeholder='Last Name...' {...register("lastName")} />
        <input type="text" placeholder='Email...'{...register("email")}/>
        <input type="number" placeholder='Phone...' {...register("phone")}/>
        <button type='submit'>submit</button>
    </form>
  )
}

export default FormOne