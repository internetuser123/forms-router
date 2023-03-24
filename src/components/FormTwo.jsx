import React from 'react'
import { useForm } from "react-hook-form"
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import styles from './FormTwo.module.css'
import { useNavigate} from 'react-router-dom'
import { FormContext } from '../App'
import { useContext } from 'react'


const FormTwo = () => {

  const {formData, setFormData} = useContext(FormContext)


  const navigate = useNavigate()

  const schema = yup.object().shape({
    adress: yup.string().required("* Adress is required"),
    zipcode: yup.number().test('len,', '* Must be exactly 5 digits', val => val.toString().length === 5),
    city: yup.string().required("* City is required"),
    terms: yup.boolean().oneOf([true], "* You need to accept the terms and conditions"),
    
  })

    const {register, handleSubmit, formState: {errors} } = useForm({
      resolver: yupResolver(schema)
    })

    

    const onSubmit = (data) => {
      console.log("formdata", formData)
      setFormData({...data, formData})
      navigate("/result")
    }

  return (
    <div  className={styles.container}>
      <div className={styles.formContainer}>
          <p>Enter your information here:</p>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <input className={styles.input} type="text" placeholder='Adress...' {...register("adress")} />
            <p className={styles.error}>{errors.adress?.message}</p>
            <input className={styles.input} type="text" placeholder='Zipcode' {...register("zipcode")} />
            <p className={styles.error}>{errors.zipcode?.message}</p>
            <input className={styles.input} type="text" placeholder='City'{...register("city")}/>
            <p className={styles.error}>{errors.city?.message}</p>
            <p>I accept the terms and conditions <input type="checkbox" {...register("terms")}/></p>
            <p className={styles.error}>{errors.terms?.message}</p>
            <button className={styles.button} type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default FormTwo