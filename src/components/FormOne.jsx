import React, { useState, useContext } from 'react'
import { useForm } from "react-hook-form"
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import styles from './FormOne.module.css'
import { useNavigate} from 'react-router-dom'
import { FormContext } from '../App'





const FormOne = () => {

  const {formData, setFormData} = useContext(FormContext)

  const navigate = useNavigate()

  const schema = yup.object().shape({
    firstName: yup.string().required("* Your name is required"),
    lastName: yup.string().required("* Your last name is required"),
    email: yup.string().email().required("* Your email is required"),
    phone: yup.number().test('len', "* Your number needs to have 10 digits", val => val.toString().length === 10)
  })

    const {register, handleSubmit, formState: {errors} } = useForm({
      resolver: yupResolver(schema)
    })

    

    const onSubmit = (data) => {
      setFormData({...data})
      navigate('/formTwo')
    }

  return (
    <div  className={styles.container}>
      <div className={styles.formContainer}>
          <p>Enter your information here:</p>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <input className={styles.input} type="text" placeholder='First Name...' {...register("firstName")} />
            <p className={styles.error}>{errors.firstName?.message}</p>
            <input className={styles.input} type="text" placeholder='Last Name...' {...register("lastName")} />
            <p className={styles.error}>{errors.lastName?.message}</p>
            <input className={styles.input} type="text" placeholder='Email...'{...register("email")}/>
            <p className={styles.error}>{errors.email?.message}</p>
            <input className={styles.input} type="number" placeholder='Phone...' {...register("phone")}/>
            <p className={styles.error}>{errors.phone?.message}</p>
            <button className={styles.button} type='submit' >Submit</button>
        </form>
      </div>
    </div>
  )
}

export default FormOne