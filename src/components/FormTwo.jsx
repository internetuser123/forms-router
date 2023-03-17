import React from 'react'
import { useForm } from "react-hook-form"
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import styles from './FormTwo.module.css'


const FormTwo = () => {

  const schema = yup.object().shape({
    adress: yup.string().required(),
    zipcode: yup.number().required(),
    city: yup.string().required(),
    /* validate: yup.number().required() */
  })

    const {register, handleSubmit} = useForm({
      resolver: yupResolver(schema)
    })

    

    const onSubmit = (data) => {
        console.log(data)
    }

  return (
    <div  className={styles.container}>
      <div className={styles.formContainer}>
          <p>Enter your information here:</p>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <input className={styles.input} type="text" placeholder='Adress...' {...register("adress")} />
            <input className={styles.input} type="text" placeholder='Zipcode' {...register("zipcode")} />
            <input className={styles.input} type="text" placeholder='City'{...register("city")}/>
            <button className={styles.button} type='submit'>submit</button>
        </form>
      </div>
    </div>
  )
}

export default FormTwo