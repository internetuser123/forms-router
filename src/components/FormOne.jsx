import React from 'react'
import { useForm } from "react-hook-form"
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import styles from './FormOne.module.css'
import { useNavigate} from 'react-router-dom'




const FormOne = () => {

  const navigate = useNavigate()

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
    <div  className={styles.container}>
      <div className={styles.formContainer}>
          <p>Enter your information here:</p>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <input className={styles.input} type="text" placeholder='First Name...' {...register("firstName")} />
            <input className={styles.input} type="text" placeholder='Last Name...' {...register("lastName")} />
            <input className={styles.input} type="text" placeholder='Email...'{...register("email")}/>
            <input className={styles.input} type="number" placeholder='Phone...' {...register("phone")}/>
            <button className={styles.button} type='submit' onClick={() => navigate("/formTwo")} >Submit</button>
        </form>
      </div>
    </div>
  )
}

export default FormOne